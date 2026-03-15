import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { addLangToPath, LANGUAGE_COOKIE, LANGUAGE_COOKIE_SOURCE, normalizeLanguage } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasZhLocale = /^\/zh(\/|$)/.test(pathname);
  const isStaticAsset =
    pathname === '/favicon.ico' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$/i);

  if (isStaticAsset || pathnameHasZhLocale) {
    return NextResponse.next();
  }

  const cookieSource = request.cookies.get(LANGUAGE_COOKIE_SOURCE)?.value;
  const cookieLang = cookieSource === 'manual' ? normalizeLanguage(request.cookies.get(LANGUAGE_COOKIE)?.value) : null;
  const headerLang = normalizeLanguage(request.headers.get('accept-language'));
  const preferredLanguage = cookieLang ?? headerLang ?? 'en';

  if (preferredLanguage === 'zh') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = addLangToPath(pathname, 'zh');
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$).*)',
  ],
};
