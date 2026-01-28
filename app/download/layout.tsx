import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Simprint',
  description:
    'Download Simprint anti-detect browser for Windows, macOS, and Linux. Create isolated browser profiles with unique fingerprints and manage multiple accounts securely.',
  keywords: [
    'download simprint',
    'anti-detect browser download',
    'simprint windows',
    'simprint macos',
    'simprint linux',
    'browser download',
  ],
  openGraph: {
    title: 'Download Simprint — Anti-Detect Browser',
    description:
      'Download Simprint anti-detect browser for Windows, macOS, and Linux. Create isolated browser profiles with unique fingerprints.',
    url: 'https://simprint.com/download',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://simprint.com/download',
    languages: {
      'en-US': 'https://simprint.com/download',
      'zh-CN': 'https://simprint.com/zh/download',
    },
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
