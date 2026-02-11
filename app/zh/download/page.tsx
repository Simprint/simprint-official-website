'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { useLanguage } from '@/hooks/useLanguage';
import { useCursorGlow } from '@/hooks/useCursorGlow';

const downloadTranslations = {
  en: {
    nav: { docs: 'Docs', download: 'Download', console: 'Console' },
    download: {
      label: 'Download',
      title: 'Get Simprint',
      desc: 'Download Simprint for your operating system. Create isolated browser profiles with unique fingerprints and manage multiple accounts securely.',
      windows: 'Windows',
      windowsDesc: 'For Windows 10/11 (64-bit)',
      macos: 'macOS',
      macosDesc: 'For macOS 12+ (Intel & Apple Silicon)',
      linux: 'Linux',
      linuxDesc: 'For Ubuntu 20.04+ / Debian 11+',
      available: 'Available',
      comingSoon: 'Coming Soon',
      btn: 'Download for Windows',
      unavailable: 'Not Available Yet',
      note: 'By downloading, you agree to our <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.',
    },
    req: {
      os: 'Windows 10/11 64-bit',
      ram: '8GB RAM minimum',
      disk: '500MB disk space',
    },
    footer: { help: 'Help Center', privacy: 'Privacy', status: 'Status: Operational' },
  },
  zh: {
    nav: { docs: '文档', download: '下载', console: '控制台' },
    download: {
      label: '下载',
      title: '获取 Simprint',
      desc: '下载适用于您操作系统的 Simprint。创建具有独特指纹的隔离浏览器配置文件，安全管理多个账号。',
      windows: 'Windows',
      windowsDesc: '适用于 Windows 10/11 (64位)',
      macos: 'macOS',
      macosDesc: '适用于 macOS 12+ (Intel 和 Apple Silicon)',
      linux: 'Linux',
      linuxDesc: '适用于 Ubuntu 20.04+ / Debian 11+',
      available: '可下载',
      comingSoon: '即将推出',
      btn: '下载 Windows 版',
      unavailable: '暂未开放',
      note: '下载即表示您同意我们的<a href="#" class="text-blue-500 hover:underline">服务条款</a>和<a href="#" class="text-blue-500 hover:underline">隐私政策</a>。',
    },
    req: {
      os: 'Windows 10/11 64位',
      ram: '最低 8GB 内存',
      disk: '500MB 磁盘空间',
    },
    footer: { help: '帮助中心', privacy: '隐私政策', status: '状态：正常运行' },
  },
};

export default function DownloadPage() {
  const { currentLang } = useLanguage();
  const searchParams = useSearchParams();
  const [windowsVersion, setWindowsVersion] = useState<string | null>(null);

  useCursorGlow();
  const t = downloadTranslations[currentLang];

  useEffect(() => {
    fetch('/api/download/windows/version')
      .then((res) => (res.ok ? res.json() : { version: null }))
      .then((data: { version: string | null }) =>
        setWindowsVersion(data.version ?? null)
      )
      .catch(() => setWindowsVersion(null));
  }, []);

  const referralCode = searchParams.get('referral_code');
  const downloadUrl = referralCode
    ? `/api/download/windows?referral_code=${encodeURIComponent(referralCode)}`
    : '/api/download/windows';

  const deeplinkUrl = referralCode
    ? `simprint://register?referral_code=${encodeURIComponent(referralCode)}`
    : null;

  const handleWindowsDownloadClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!deeplinkUrl) {
      return;
    }

    event.preventDefault();

    try {
      window.location.href = deeplinkUrl;
      return;
    } catch {
      window.location.href = downloadUrl;
    }
  };

  return (
    <>
      {/* 全局线条 */}
      <div className="rail-v left-[5%]"></div>
      <div className="rail-v right-[5%]"></div>

      {/* 主内容 */}
      <main className="pt-32 pb-24 relative z-10">
        <div className="container-main">
          {/* 标题区域 */}
          <div className="text-center mb-20 reveal">
            <div className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-6">
              {t.download.label}
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">{t.download.title}</h1>
            <p className="text-lg text-[#a3a3a3] font-light max-w-2xl mx-auto">{t.download.desc}</p>
          </div>

          {/* 下载卡片 */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Windows */}
            <div className="download-card reveal" style={{ transitionDelay: '0.1s' }}>
              <svg className="os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{t.download.windows}</h3>
              <p className="os-desc text-sm text-[#a3a3a3] mb-4">{t.download.windowsDesc}</p>

              <div className="version-tag mb-4">
                v{windowsVersion ?? '—'} <span>{t.download.available}</span>
              </div>

              <ul className="requirements-list">
                <li>
                  <i data-lucide="check"></i> <span>{t.req.os}</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.ram}</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.disk}</span>
                </li>
              </ul>

              <a
                href={downloadUrl}
                className="btn-download w-full"
                onClick={handleWindowsDownloadClick}
              >
                <i data-lucide="download" className="w-4 h-4"></i>
                {t.download.btn}
              </a>

              {/* 背景大图标 */}
              <svg className="bg-os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
            </div>

            {/* macOS */}
            <div className="download-card disabled reveal" style={{ transitionDelay: '0.2s' }}>
              <svg className="os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{t.download.macos}</h3>
              <p className="os-desc text-sm text-[#a3a3a3] mb-4">{t.download.macosDesc}</p>

              <div className="version-tag coming-soon mb-4">{t.download.comingSoon}</div>

              <ul className="requirements-list">
                <li>
                  <i data-lucide="check"></i> <span>macOS 12 Monterey+</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.ram}</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.disk}</span>
                </li>
              </ul>

              <button className="btn-disabled w-full">
                <i data-lucide="clock" className="w-4 h-4"></i>
                {t.download.unavailable}
              </button>

              {/* 背景大图标 */}
              <svg className="bg-os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>

            {/* Linux */}
            <div className="download-card disabled reveal" style={{ transitionDelay: '0.3s' }}>
              <svg className="os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
              </svg>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{t.download.linux}</h3>
              <p className="os-desc text-sm text-[#a3a3a3] mb-4">{t.download.linuxDesc}</p>

              <div className="version-tag coming-soon mb-4">{t.download.comingSoon}</div>

              <ul className="requirements-list">
                <li>
                  <i data-lucide="check"></i> <span>Ubuntu 20.04+ / Debian 11+</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.ram}</span>
                </li>
                <li>
                  <i data-lucide="check"></i> <span>{t.req.disk}</span>
                </li>
              </ul>

              <button className="btn-disabled w-full">
                <i data-lucide="clock" className="w-4 h-4"></i>
                {t.download.unavailable}
              </button>

              {/* 背景大图标 */}
              <svg className="bg-os-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
              </svg>
            </div>
          </div>

          {/* 底部提示 */}
          <div className="text-center mt-16 reveal" style={{ transitionDelay: '0.4s' }}>
            <p
              className="text-sm text-[#a3a3a3]"
              dangerouslySetInnerHTML={{ __html: t.download.note }}
            ></p>
          </div>
        </div>
      </main>
    </>
  );
}
