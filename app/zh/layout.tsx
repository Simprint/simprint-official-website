import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simprint — 专业反检测浏览器，多账号管理',
  description:
    'Simprint 是一款专为团队打造的专业反检测浏览器。为每个配置文件创建独特的浏览器指纹，彻底消除账号关联风险。适用于电商运营、广告投放和社媒管理。',
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
    title: 'Simprint — 专业反检测浏览器，多账号管理',
    description:
      '专为团队打造的专业反检测浏览器。创建独特的浏览器指纹，彻底消除账号关联风险。',
    url: 'https://www.simprint.cc/zh',
    locale: 'zh_CN',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.cc/zh',
    languages: {
      'en-US': 'https://www.simprint.cc',
      'zh-CN': 'https://www.simprint.cc/zh',
      'x-default': 'https://www.simprint.cc',
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
