import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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
    url: 'https://www.simprint.cc/zh/download',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.cc/zh/download',
    languages: {
      'en-US': 'https://www.simprint.cc/download',
      'zh-CN': 'https://www.simprint.cc/zh/download',
    },
  },
};

export default function ZhDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
