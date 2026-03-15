'use client';

import LangLink from '@/components/LangLink';
import { useLanguage } from '@/hooks/useLanguage';
import { addLangToPath, getPathWithoutLang } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const { t, currentLang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang: 'en' | 'zh') => {
    const pathWithoutLang = getPathWithoutLang(pathname);
    router.push(addLangToPath(pathWithoutLang, lang));
    setDropdownOpen(false);
  };

  return (
    <footer className="relative z-20 mt-24 border-t border-[rgba(108,132,170,0.14)] bg-[rgba(255,255,255,0.72)] py-14 backdrop-blur-[14px]">
      <div className="container-main">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[32rem] shrink-0">
            <div className="text-[14px] font-bold tracking-[-0.02em] text-[#0b1220]">Simprint</div>
            <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.85] text-[var(--text-muted)]">
              {currentLang === 'zh'
                ? '帮助团队更高效地开展多账号出海业务，减少环境关联风险，保持更稳定的执行效率。'
                : 'Help teams run multi-account global operations more efficiently with clearer environment isolation and more stable execution.'}
            </p>

            <div className="relative mt-8 inline-block" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex min-w-[220px] items-center justify-between gap-2 border border-[#CCCCCC] bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all hover:border-[#999999]"
              >
                <span className="flex items-center gap-2">
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
                </span>
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
                className={`absolute left-0 top-full z-20 mt-2 min-w-[220px] overflow-hidden border border-[#CCCCCC] bg-white transition-all duration-200 ${
                  dropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <button
                  onClick={() => switchLanguage('en')}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    currentLang === 'en' ? 'bg-[rgba(13,92,255,0.06)] text-[#0b1220]' : 'hover:bg-[#F5F5F5] text-[var(--text-muted)]'
                  }`}
                >
                  <span>English</span>
                  {currentLang === 'en' ? <span>✓</span> : null}
                </button>
                <button
                  onClick={() => switchLanguage('zh')}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    currentLang === 'zh' ? 'bg-[rgba(13,92,255,0.06)] text-[#0b1220]' : 'hover:bg-[#F5F5F5] text-[var(--text-muted)]'
                  }`}
                >
                  <span>中文</span>
                  {currentLang === 'zh' ? <span>✓</span> : null}
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-[15px] text-[#0b1220]">
              <a href="mailto:support@simprint.app" className="flex items-center gap-3 transition-colors hover:text-[var(--accent)]">
                <span className="text-[16px] text-[var(--text-muted)]">✉</span>
                <span>support@simprint.app</span>
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:justify-end lg:gap-20 xl:gap-28">
            <div className="min-w-[140px]">
              <div className="text-[13px] font-bold text-[#0b1220]">
                {currentLang === 'zh' ? '资源' : 'Resources'}
              </div>
              <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#0b1220]">
                <LangLink href="/download" className="transition-colors hover:text-[var(--accent)]">
                  {t.nav.download}
                </LangLink>
                <LangLink href="/docs" className="transition-colors hover:text-[var(--accent)]">
                  {t.nav.docs}
                </LangLink>
                <a href="#faq" className="transition-colors hover:text-[var(--accent)]">
                  {currentLang === 'zh' ? '常见问题' : 'FAQ'}
                </a>
                <a href="#" className="transition-colors hover:text-[var(--accent)]">
                  {currentLang === 'zh' ? '使用指南' : 'Guides'}
                </a>
                <a href="#" className="transition-colors hover:text-[var(--accent)]">
                  {currentLang === 'zh' ? '更新日志' : 'Changelog'}
                </a>
              </div>
            </div>

            <div className="min-w-[140px]">
              <div className="text-[13px] font-bold text-[#0b1220]">
                {currentLang === 'zh' ? '应用场景' : 'Use Cases'}
              </div>
              <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#0b1220]">
                <span>{currentLang === 'zh' ? '广告投放' : 'Advertising'}</span>
                <span>{currentLang === 'zh' ? '社媒运营' : 'Social Media'}</span>
                <span>{currentLang === 'zh' ? '电商运营' : 'E-commerce'}</span>
                <span>{currentLang === 'zh' ? '联盟营销' : 'Affiliate Marketing'}</span>
                <span>{currentLang === 'zh' ? '数据采集' : 'Data Collection'}</span>
              </div>
            </div>

            <div className="min-w-[160px]">
              <div className="text-[13px] font-bold text-[#0b1220]">
                {currentLang === 'zh' ? '产品功能' : 'Product Features'}
              </div>
              <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#0b1220]">
                <span>{currentLang === 'zh' ? '独立环境' : 'Isolated Environments'}</span>
                <span>{currentLang === 'zh' ? '指纹控制' : 'Fingerprint Control'}</span>
                <span>{currentLang === 'zh' ? '代理绑定' : 'Proxy Binding'}</span>
                <span>{currentLang === 'zh' ? '团队协作' : 'Team Collaboration'}</span>
                <span>{currentLang === 'zh' ? '自动化工作流' : 'Automated Workflows'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(108,132,170,0.14)] pt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <div>© Simprint 2026</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition-colors hover:text-[#0b1220]">
              {t.footer.help}
            </a>
            <a href="#" className="transition-colors hover:text-[#0b1220]">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
