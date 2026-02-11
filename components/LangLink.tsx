'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { addLangToPath } from '@/lib/i18n';
import { ReactNode } from 'react';

interface LangLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function LangLink({ href, children, className, ...props }: LangLinkProps) {
  const { currentLang } = useLanguage();
  const langHref = addLangToPath(href, currentLang);

  return (
    <Link href={langHref} className={className} {...props}>
      {children}
    </Link>
  );
}
