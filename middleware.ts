import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 检查路径是否已经包含中文前缀
  const pathnameHasZhLocale = /^\/zh(\/|$)/.test(pathname);
  
  // 如果路径没有语言前缀且不是静态资源，重定向到默认语言（英文，不带前缀）
  // 英文路径：/、/docs、/download
  // 中文路径：/zh、/zh/docs、/zh/download
  if (
    !pathnameHasZhLocale &&
    pathname !== '/' &&
    pathname !== '/favicon.ico' &&
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/api') &&
    !pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico)$/i)
  ) {
    // 对于没有语言前缀的路径，保持原样（默认为英文）
    // 不需要重定向，因为英文路径不带前缀
    return NextResponse.next();
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
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
