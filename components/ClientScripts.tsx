'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { addLangToPath, getPathWithoutLang, LANGUAGE_COOKIE_SOURCE, normalizeLanguage } from '@/lib/i18n';

export default function ClientScripts() {
  const pathname = usePathname();
  const router = useRouter();

  // Lucide 图标初始化（在路由变化时重新执行一次，保证新内容中的图标也被处理）
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasExplicitZhPrefix = pathname === '/zh' || pathname.startsWith('/zh/');
    const manualCookieMatch = document.cookie.match(new RegExp(`(?:^|; )${LANGUAGE_COOKIE_SOURCE}=([^;]+)`));
    const hasManualLanguageChoice = manualCookieMatch?.[1] === 'manual';
    const browserLang = normalizeLanguage(navigator.language) ?? 'en';
    if (hasExplicitZhPrefix || hasManualLanguageChoice || browserLang !== 'zh') return;

    router.replace(addLangToPath(getPathWithoutLang(pathname), 'zh'));
  }, [pathname, router]);

  // Reveal 动画：在每次路由变化后，重新监听当前页面中的 .reveal 元素
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll<HTMLElement>('.reveal');

    elements.forEach((el) => {
      // 每次进入新路由时先重置状态，这样滚动到视口时动画可以再次触发
      el.classList.remove('active');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
