import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';
import GlowEffects from '@/components/GlowEffects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';
import StructuredData from '@/components/StructuredData';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.simprint.app'),
  title: {
    default: 'Simprint — Fingerprint Browser for Secure Multi-Account Management',
    template: '%s | Simprint',
  },
  description:
    'Professional fingerprint browser for secure multi-account management. Create isolated browser profiles, control fingerprints, and reduce account correlation risks.',
  keywords: [
    'anti-detect browser',
    'multi-account management',
    'browser fingerprint',
    'account isolation',
    'proxy browser',
    'e-commerce management',
    'advertising accounts',
    'social media management',
    'browser profiles',
    'fingerprint spoofing',
    'account security',
    'team collaboration',
  ],
  authors: [{ name: 'Simprint Team' }],
  creator: 'Simprint',
  publisher: 'Simprint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: 'https://www.simprint.app',
    siteName: 'Simprint',
    title: 'Simprint — Fingerprint Browser for Secure Multi-Account Management',
    description:
      'Professional fingerprint browser for teams. Create isolated browser profiles, manage fingerprints, and reduce account correlation risks for e-commerce, advertising, and social media operations.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Simprint Anti-Detect Browser',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simprint — Fingerprint Browser for Secure Multi-Account Management',
    description:
      'Professional fingerprint browser for teams. Create isolated browser profiles, manage fingerprints, and reduce account correlation risks.',
    images: ['/logo.png'],
    creator: '@simprint',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.simprint.app',
    languages: {
      'en-US': 'https://www.simprint.app',
      'zh-CN': 'https://www.simprint.app/zh',
      'x-default': 'https://www.simprint.app',
    },
  },
  verification: {
    // 可以添加 Google Search Console 和 Bing 验证
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/lucide@latest" async></script>
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <StructuredData />
        <LanguageProvider>
          <GlowEffects />
          <ClientScripts />
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
