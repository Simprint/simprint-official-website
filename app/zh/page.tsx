'use client';

import LangLink from '@/components/LangLink';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useCursorGlow } from '@/hooks/useCursorGlow';

export default function Home() {
  const { t } = useLanguage();
  useCursorGlow();
  const heroImagesRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // 检查所有图片是否已加载
    const checkImagesLoaded = () => {
      const images = heroImagesRef.current?.querySelectorAll('img');
      if (images && images.length > 0) {
        let loadedCount = 0;
        images.forEach((img) => {
          if (img.complete && img.naturalHeight !== 0) {
            loadedCount++;
          } else {
            img.addEventListener('load', () => {
              loadedCount++;
              if (loadedCount === images.length) {
                setImagesLoaded(true);
              }
            }, { once: true });
          }
        });
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      }
    };

    // 等待 DOM 渲染完成
    const timer = setTimeout(() => {
      checkImagesLoaded();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 当图片加载完成后，触发动画
    if (imagesLoaded && heroImagesRef.current) {
      const timer = setTimeout(() => {
        if (heroImagesRef.current) {
          heroImagesRef.current.classList.add('auto-hover-active');
          setTimeout(() => {
            if (heroImagesRef.current) {
              heroImagesRef.current.classList.remove('auto-hover-active');
            }
          }, 1200);
        }
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  return (
    <main>
      {/* 右上角弧线装饰 */}
      <div className="corner-arcs" aria-hidden="true">
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
      </div>

      {/* 全局垂直辅助线 */}
      <div className="rail-v left-[5%]" aria-hidden="true"></div>
      <div className="rail-v left-[50%] opacity-40" aria-hidden="true"></div>
      <div className="rail-v right-[5%]" aria-hidden="true"></div>

      <div className="junction top-[150px] left-[5%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="junction top-[150px] left-[50%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="junction top-[150px] right-[5%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>

      {/* Hero Section */}
      <header className="relative pt-56 pb-52 overflow-hidden">
        <div className="section-number left" style={{ top: '5rem' }}>
          01
        </div>
        <div className="rail-h top-[150px]"></div>
        <div className="rail-h top-[85%] opacity-60"></div>

        <div className="container-main reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl relative">
              <div className="junction -top-12 -left-12"></div>

              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-10 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-blue-600"></span>
                <span dangerouslySetInnerHTML={{ __html: t.hero.badge }}></span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-medium tracking-tight mb-12 leading-[1.02]"
                dangerouslySetInnerHTML={{ __html: t.hero.title }}
              ></h1>

              <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-snug max-w-xl mb-16">{t.hero.desc}</p>

              <div className="flex flex-wrap gap-6 relative">
                <LangLink href="/download" className="btn-system btn-primary">
                  {t.hero.btn1}
                </LangLink>
                <LangLink href="/docs" className="btn-system btn-secondary">
                  {t.hero.btn2}
                </LangLink>
              </div>
            </div>

            {/* 堆叠图片展示 */}
            <div className="hidden lg:block relative">
              <div className="hero-images" ref={heroImagesRef}>
                <div className="stack-card">
                  <img
                    src="https://i.ibb.co/YTDtF5C8/2026-01-16-170736.png"
                    alt="Simprint 反检测浏览器环境管理界面，显示多个具有独特指纹的浏览器配置文件"
                    loading="lazy"
                  />
                </div>
                <div className="stack-card">
                  <img
                    src="https://i.ibb.co/DgjqTpkf/2026-01-16-170837.png"
                    alt="Simprint 浏览器仪表板，显示账号隔离和指纹配置设置"
                    loading="lazy"
                  />
                </div>
                <div className="stack-card">
                  <img
                    src="https://i.ibb.co/0VcGBbJ1/2026-01-16-174445.png"
                    alt="Simprint 浏览器配置文件界面，包含代理配置和团队协作功能"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="logic" className="relative py-32 border-y border-[#2a2a2b]">
        <div className="section-number right">02</div>
        <div className="rail-v left-[35%] opacity-30"></div>
        <div className="rail-h top-1/2 opacity-40"></div>
        <div className="junction top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="junction top-1/2 left-[5%] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-5 reveal">
              <div className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-8">
                {t.section02.label}
              </div>
              <h2
                className="text-3xl font-medium mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: t.section02.title }}
              ></h2>
              <p className="text-[#a3a3a3] text-lg font-light leading-relaxed">{t.section02.desc}</p>
            </div>
            <div className="md:col-span-7 reveal">
              <div className="data-panel relative p-12 border border-[#2a2a2b] bg-[#080808]">
                <div className="corner-accent absolute -top-px -left-px w-6 h-6 border-t border-l border-blue-600"></div>
                <div className="corner-accent absolute -bottom-px -right-px w-6 h-6 border-b border-r border-blue-600"></div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="stat-item">
                    <div className="text-sm font-bold text-blue-600 uppercase mb-4 tracking-widest">
                      {t.section02.stat1}
                    </div>
                    <div className="stat-value text-4xl font-light tracking-tighter">99.98%</div>
                  </div>
                  <div className="stat-item">
                    <div className="text-sm font-bold text-blue-600 uppercase mb-4 tracking-widest">
                      {t.section02.stat2}
                    </div>
                    <div className="stat-value text-4xl font-light tracking-tighter">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-32">
        <div className="section-number left">03</div>
        <div className="rail-h top-0"></div>
        <div className="rail-v left-[50%] opacity-20"></div>

        <div className="container-main">
          <div className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-20">
            {t.section03.label}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="tech-card bg-[#0a0a0a] border border-[#2a2a2b] p-12 reveal">
              <i data-lucide="fingerprint" className="w-7 h-7 text-blue-600 mb-8"></i>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{t.section03.card1.title}</h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">{t.section03.card1.desc}</p>
              <i data-lucide="fingerprint" className="bg-icon"></i>
            </div>
            <div className="tech-card bg-[#0a0a0a] border border-[#2a2a2b] p-12 reveal">
              <i data-lucide="shield-check" className="w-7 h-7 text-blue-600 mb-8"></i>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{t.section03.card2.title}</h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">{t.section03.card2.desc}</p>
              <i data-lucide="shield-check" className="bg-icon"></i>
            </div>
            <div className="tech-card bg-[#0a0a0a] border border-[#2a2a2b] p-12 reveal">
              <i data-lucide="users" className="w-7 h-7 text-blue-600 mb-8"></i>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{t.section03.card3.title}</h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">{t.section03.card3.desc}</p>
              <i data-lucide="users" className="bg-icon"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="ops" className="relative py-32 border-t border-[#2a2a2b] bg-[#030303]">
        <div className="section-number right">04</div>
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <div className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-8">
                {t.section04.label}
              </div>
              <h3 className="text-3xl font-medium">{t.section04.title}</h3>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="use-case-card p-10 border border-[#2a2a2b] bg-black reveal relative overflow-hidden">
                <div className="block-marker -left-px top-1/2 -translate-y-1/2 opacity-0"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold uppercase tracking-widest">{t.section04.case1.title}</h4>
                  <span className="text-sm font-mono text-neutral-400">{t.section04.case1.platforms}</span>
                </div>
                <p className="text-lg text-[#a3a3a3] font-light max-w-xl">{t.section04.case1.desc}</p>
              </div>

              <div className="use-case-card p-10 border border-[#2a2a2b] bg-black reveal relative overflow-hidden">
                <div className="block-marker -left-px top-1/2 -translate-y-1/2 opacity-0"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold uppercase tracking-widest">{t.section04.case2.title}</h4>
                  <span className="text-sm font-mono text-neutral-400">{t.section04.case2.platforms}</span>
                </div>
                <p className="text-lg text-[#a3a3a3] font-light max-w-xl">{t.section04.case2.desc}</p>
              </div>

              <div className="use-case-card p-10 border border-[#2a2a2b] bg-black reveal relative overflow-hidden">
                <div className="block-marker -left-px top-1/2 -translate-y-1/2 opacity-0"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold uppercase tracking-widest">{t.section04.case3.title}</h4>
                  <span className="text-sm font-mono text-neutral-400">{t.section04.case3.platforms}</span>
                </div>
                <p className="text-lg text-[#a3a3a3] font-light max-w-xl">{t.section04.case3.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-48 text-center border-t border-[#2a2a2b]">
        <div className="section-number left">05</div>
        <div className="rail-v left-1/2 -translate-x-1/2 h-20 top-0"></div>
        <div className="rail-h top-1/2 opacity-30"></div>
        <div className="junction top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container-main reveal">
          <h2 className="text-3xl font-medium mb-8">{t.cta.title}</h2>
          <p className="text-neutral-400 mb-12 text-lg leading-relaxed max-w-xl mx-auto">{t.cta.desc}</p>
          <div className="flex justify-center">
            <LangLink href="/download" className="btn-system btn-primary px-12">
              {t.cta.btn}
            </LangLink>
          </div>
        </div>
      </section>
    </main>
  );
}
