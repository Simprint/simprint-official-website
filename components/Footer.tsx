'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-[#2a2a2b] bg-[#050505] relative z-20">
      <div className="container-main flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
        <div>© Simprint 2024</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.help}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="text-blue-600">
            {t.footer.status}
          </a>
        </div>
      </div>
    </footer>
  );
}
