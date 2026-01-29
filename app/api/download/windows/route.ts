import type { NextRequest } from 'next/server';

const LATEST_JSON_URL =
  'https://pub-39307a5e69c74324855a762027cbf9bf.r2.dev/latest.json';

interface LatestJson {
  version: string;
  platforms: {
    ['x86_64-pc-windows-msvc']?: {
      r2_url?: string;
    };
    [key: string]: {
      r2_url?: string;
    } | undefined;
  };
}

/** 可逆编码：便于客户端从文件名解析回原始推荐码再提交。使用 base64url（文件名安全）。 */
function encodeReferral(referral: string | null): string | null {
  if (!referral || !referral.trim()) return null;
  const base64 = Buffer.from(referral.trim(), 'utf8').toString('base64');
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const referralCode = searchParams.get('referral_code');

  let latestRes: Response;
  try {
    latestRes = await fetch(LATEST_JSON_URL, {
      // 始终拿最新的版本信息
      cache: 'no-store',
    });
  } catch (error) {
    console.error('Failed to fetch latest.json from R2:', error);
    return new Response('Failed to fetch latest release info', {
      status: 502,
    });
  }

  if (!latestRes.ok) {
    return new Response('Failed to fetch latest release info', {
      status: 502,
    });
  }

  const latestJson = (await latestRes.json()) as LatestJson;
  const platformInfo = latestJson.platforms['x86_64-pc-windows-msvc'];
  const r2Url = platformInfo?.r2_url;

  if (!r2Url) {
    return new Response('Download URL not available', {
      status: 502,
    });
  }

  const encoded = encodeReferral(referralCode);

  // 从 r2_url 动态解析原始文件名，有推荐码时在扩展名前拼接 -R_{encoded}_R 作为标志
  const urlObj = new URL(r2Url);
  const parts = urlObj.pathname.split('/');
  const originalName = parts[parts.length - 1] || 'download.exe';

  const lastDotIndex = originalName.lastIndexOf('.');
  const baseName =
    lastDotIndex > 0 ? originalName.slice(0, lastDotIndex) : originalName;
  const ext = lastDotIndex > 0 ? originalName.slice(lastDotIndex) : '';

  const fileName =
    encoded && baseName
      ? `${baseName}-R_${encoded}_R${ext}`
      : originalName || 'download.exe';

  let fileRes: Response;
  try {
    fileRes = await fetch(r2Url);
  } catch (error) {
    console.error('Failed to fetch installer from R2:', error);
    return new Response('Failed to download installer', {
      status: 502,
    });
  }

  if (!fileRes.ok || !fileRes.body) {
    return new Response('Failed to download installer', {
      status: 502,
    });
  }

  const contentType =
    fileRes.headers.get('content-type') ?? 'application/octet-stream';
  const contentLength = fileRes.headers.get('content-length') ?? undefined;

  const headers = new Headers();
  headers.set('Content-Type', contentType);
  if (contentLength) {
    headers.set('Content-Length', contentLength);
  }
  headers.set(
    'Content-Disposition',
    `attachment; filename="${fileName.replace(/"/g, '')}"`
  );

  return new Response(fileRes.body, {
    status: 200,
    headers,
  });
}

