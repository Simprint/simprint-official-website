import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/hooks/useLanguage';
import GlowEffects from '@/components/GlowEffects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Simprint — Anti-Detect Browser for Multi-Account Management',
  description: 'Simprint is a professional anti-detect browser built for teams. Create unique browser fingerprints for each profile and eliminate account correlation risks entirely.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com" async></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/lucide@latest" async></script>
      </head>
      <body className={`${inter.variable} antialiased`}>
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
