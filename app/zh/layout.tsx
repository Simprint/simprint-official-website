import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simprint — 指纹浏览器，多账号安全管理',
  description:
    '专业指纹浏览器，多账号安全管理工具。支持隔离浏览器配置文件、指纹控制与代理绑定，适用于电商、广告和社媒管理。',
  keywords: [
    '反检测浏览器',
    '多账号管理',
    '浏览器指纹',
    '账号隔离',
    '代理浏览器',
    '电商管理',
    '广告账户',
    '社媒管理',
    '浏览器配置文件',
    '指纹伪装',
    '账号安全',
    '团队协作',
  ],
  openGraph: {
    title: 'Simprint — 指纹浏览器，多账号安全管理',
    description:
      '专为团队打造的专业指纹浏览器。支持隔离浏览器配置文件、指纹控制与代理绑定，降低账号关联风险。',
    url: 'https://www.simprint.app/zh',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.app/zh',
    languages: {
      'en-US': 'https://www.simprint.app',
      'zh-CN': 'https://www.simprint.app/zh',
      'x-default': 'https://www.simprint.app',
    },
  },
};

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
