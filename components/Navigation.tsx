'use client';

import LangLink from '@/components/LangLink';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { getPathWithoutLang, addLangToPath } from '@/lib/i18n';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLang, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  // 切换语言时跳转到对应路由
  const switchLanguage = (lang: 'en' | 'zh') => {
    const pathWithoutLang = getPathWithoutLang(pathname);
    const newPath = addLangToPath(pathWithoutLang, lang);
    router.push(newPath);
    setDropdownOpen(false);
  };

  // 检查当前路径是否匹配（考虑语言前缀）
  const isActive = (path: string) => {
    const pathWithoutLang = getPathWithoutLang(pathname);
    return pathWithoutLang === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 h-14 border-b border-[#2a2a2b] bg-[#050505]/90 backdrop-blur-md">
      <div className="container-main h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <LangLink href="/" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Simprint" width={24} height={24} />
            <span className="w-px h-5 bg-[#404040] rotate-12"></span>
            <span className="font-bold tracking-[0.3em] text-[11px] uppercase">Simprint</span>
          </LangLink>
          <div className="hidden md:flex gap-8">
            <LangLink
              href="/docs"
              className={`text-[10px] uppercase tracking-widest transition-colors ${
                isActive('/docs') ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.nav.docs}
            </LangLink>
            <LangLink
              href="/download"
              className={`text-[10px] uppercase tracking-widest transition-colors ${
                isActive('/download') ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.nav.download}
            </LangLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-2 border border-[#404040] hover:border-[#606060] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{currentLang.toUpperCase()}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className={`absolute right-0 top-full mt-2 bg-[#0a0a0a] border border-[#404040] rounded overflow-hidden transition-all duration-200 min-w-[100px] ${
                dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  switchLanguage('en');
                }}
                className={`lang-option w-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-left hover:bg-[#1a1a1a] transition-colors flex items-center justify-between ${
                  currentLang === 'en' ? 'active' : ''
                }`}
              >
                English
                <span className={`lang-check text-blue-500 ${currentLang === 'en' ? 'opacity-100' : 'opacity-0'}`}>
                  ✓
                </span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  switchLanguage('zh');
                }}
                className={`lang-option w-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-left hover:bg-[#1a1a1a] transition-colors flex items-center justify-between ${
                  currentLang === 'zh' ? 'active' : ''
                }`}
              >
                中文
                <span className={`lang-check text-blue-500 ${currentLang === 'zh' ? 'opacity-100' : 'opacity-0'}`}>
                  ✓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
