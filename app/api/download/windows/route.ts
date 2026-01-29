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

function encodeReferral(referral: string | null): string | null {
  if (!referral) return null;
  const cleaned = referral.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  if (!cleaned) return null;

  let hash = 0;
  for (let i = 0; i < cleaned.length; i += 1) {
    hash = (hash * 31 + cleaned.charCodeAt(i)) >>> 0;
  }

  return hash.toString(36).toUpperCase();
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const referralCode = searchParams.get('referral_code');

  const latestRes = await fetch(LATEST_JSON_URL, {
    // 始终拿最新的版本信息
    cache: 'no-store',
  });

  if (!latestRes.ok) {
    return new Response('Failed to fetch latest release info', {
      status: 502,
    });
  }

  const latestJson = (await latestRes.json()) as LatestJson;
  const version = latestJson.version ?? '0.0.0';
  const platformInfo = latestJson.platforms['x86_64-pc-windows-msvc'];
  const r2Url = platformInfo?.r2_url;

  if (!r2Url) {
    return new Response('Download URL not available', {
      status: 502,
    });
  }

  const encoded = encodeReferral(referralCode);

  // 方案 B：steam-setup-{encoded_referral}.exe（无版本号）
  const fileName = encoded ? `steam-setup-${encoded}.exe` : 'steam-setup.exe';

  const fileRes = await fetch(r2Url);

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

