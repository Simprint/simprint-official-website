import { NextResponse } from 'next/server';

const LATEST_JSON_URL =
  'https://pub-39307a5e69c74324855a762027cbf9bf.r2.dev/latest.json';

interface LatestJson {
  version: string;
}

export const dynamic = 'force-dynamic';

/** 返回 latest.json 中的 version，供下载页展示当前可下载版本 */
export async function GET() {
  try {
    const res = await fetch(LATEST_JSON_URL, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json(
        { version: null },
        { status: 502 }
      );
    }
    const data = (await res.json()) as LatestJson;
    return NextResponse.json({ version: data.version ?? null });
  } catch {
    return NextResponse.json(
      { version: null },
      { status: 502 }
    );
  }
}
