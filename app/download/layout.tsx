import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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
    url: 'https://www.simprint.cc/download',
    type: 'website',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.simprint.cc/download',
    languages: {
      'en-US': 'https://www.simprint.cc/download',
      'zh-CN': 'https://www.simprint.cc/zh/download',
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
