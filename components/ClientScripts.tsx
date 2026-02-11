'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  // Lucide 图标初始化（在路由变化时重新执行一次，保证新内容中的图标也被处理）
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, [pathname]);

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
