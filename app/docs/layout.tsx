import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete documentation for Simprint anti-detect browser. Learn how to create browser profiles, configure fingerprints, set up proxies, and manage multiple accounts securely.',
  keywords: [
    'simprint documentation',
    'anti-detect browser guide',
    'browser fingerprint tutorial',
    'proxy configuration',
    'multi-account management guide',
  ],
  openGraph: {
    title: 'Simprint Documentation',
    description:
      'Complete documentation for Simprint anti-detect browser. Learn how to create browser profiles, configure fingerprints, and manage multiple accounts securely.',
    url: 'https://www.simprint.cc/docs',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.cc/docs',
    languages: {
      'en-US': 'https://www.simprint.cc/docs',
      'zh-CN': 'https://www.simprint.cc/zh/docs',
    },
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
