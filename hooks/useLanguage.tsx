'use client';

import { createContext, useContext, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language } from '@/lib/translations';
import { getLangFromPath } from '@/lib/i18n';

const LanguageContext = createContext<{
  currentLang: Language;
  t: typeof translations.en;
}>({
  currentLang: 'en',
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentLang = getLangFromPath(pathname);

  return (
    <LanguageContext.Provider value={{ currentLang, t: translations[currentLang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
