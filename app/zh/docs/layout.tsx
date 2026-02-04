import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文档',
  description:
    'Simprint 反检测浏览器完整文档。学习如何创建浏览器配置文件、配置指纹、设置代理，以及安全管理多个账号。',
  keywords: [
    'simprint 文档',
    '反检测浏览器指南',
    '浏览器指纹教程',
    '代理配置',
    '多账号管理指南',
  ],
  openGraph: {
    title: 'Simprint 文档',
    description:
      'Simprint 反检测浏览器完整文档。学习如何创建浏览器配置文件、配置指纹，以及安全管理多个账号。',
    url: 'https://www.simprint.cc/zh/docs',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.cc/zh/docs',
    languages: {
      'en-US': 'https://www.simprint.cc/docs',
      'zh-CN': 'https://www.simprint.cc/zh/docs',
    },
  },
};

export default function ZhDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
