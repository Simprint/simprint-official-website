import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';
import GlowEffects from '@/components/GlowEffects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.simprint.cc'),
  title: {
    default: 'Simprint — Anti-Detect Browser for Multi-Account Management',
    template: '%s | Simprint',
  },
  description:
    'Simprint is a professional anti-detect browser built for teams. Create unique browser fingerprints for each profile and eliminate account correlation risks entirely. Perfect for e-commerce, advertising, and social media management.',
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
    url: 'https://www.simprint.cc',
    siteName: 'Simprint',
    title: 'Simprint — Anti-Detect Browser for Multi-Account Management',
    description:
      'Professional anti-detect browser for teams. Create unique browser fingerprints and eliminate account correlation risks. Perfect for e-commerce, advertising, and social media management.',
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
    title: 'Simprint — Anti-Detect Browser for Multi-Account Management',
    description:
      'Professional anti-detect browser for teams. Create unique browser fingerprints and eliminate account correlation risks.',
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
    canonical: 'https://www.simprint.cc',
    languages: {
      'en-US': 'https://www.simprint.cc',
      'zh-CN': 'https://www.simprint.cc/zh',
      'x-default': 'https://www.simprint.cc',
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
        <script src="https://cdn.tailwindcss.com" async></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/lucide@latest" async></script>
      </head>
      <body className={`${inter.variable} antialiased`}>
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
