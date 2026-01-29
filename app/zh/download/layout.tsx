import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '下载 Simprint',
  description:
    '下载适用于 Windows、macOS 和 Linux 的 Simprint 反检测浏览器。创建具有独特指纹的隔离浏览器配置文件，安全管理多个账号。',
  keywords: [
    '下载 simprint',
    '反检测浏览器下载',
    'simprint windows',
    'simprint macos',
    'simprint linux',
    '浏览器下载',
  ],
  openGraph: {
    title: '下载 Simprint — 反检测浏览器',
    description:
      '下载适用于 Windows、macOS 和 Linux 的 Simprint 反检测浏览器。创建具有独特指纹的隔离浏览器配置文件。',
    url: 'https://simprint.com/zh/download',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://simprint.com/zh/download',
    languages: {
      'en-US': 'https://simprint.com/download',
      'zh-CN': 'https://simprint.com/zh/download',
    },
  },
};

function DownloadFallback() {
  return (
    <main className="pt-32 pb-24 relative z-10">
      <div className="container-main">
        <div className="text-center py-20 text-neutral-400">加载中...</div>
      </div>
    </main>
  );
}

export default function ZhDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<DownloadFallback />}>{children}</Suspense>;
}
