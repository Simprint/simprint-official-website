'use client';

import LangLink from '@/components/LangLink';
import { useCursorGlow } from '@/hooks/useCursorGlow';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const { t, currentLang } = useLanguage();
  useCursorGlow();
  const marqueeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const avatarUrls = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/men/52.jpg',
    'https://randomuser.me/api/portraits/men/68.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/women/63.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
  ];

  const useCases = [t.section04.case1, t.section04.case2, t.section04.case3];
  const testimonials =
    currentLang === 'zh'
      ? [
          {
            name: 'Daniel Smith',
            role: 'Product Manager，社媒运营',
            quote: '这个产品有市场上最友好的界面，功能强大，而且提供了很多丰富的选项。无论是初学者还是有经验的用户都能轻松上手。',
          },
          {
            name: 'Andrew Johnson',
            role: 'Lead Developer，数据抓取',
            quote: '我非常感谢 Simprint 对用户安全的重视。插件内置的隐私功能和定期更新，让我在浏览网络时对我的数据安全充满信心。',
          },
          {
            name: 'Robert Davis',
            role: 'Marketing Director，广告行业',
            quote: '我们使用 Simprint 进行社媒矩阵管理，并且所有客户推荐它。因为个人资料的转移非常方便，可靠和安全。',
          },
          {
            name: 'William Taylor',
            role: 'Software Engineer，电商行业',
            quote: 'Simprint 的自定义选项非常出色。我可以针对具体需求精细调整每个配置文件，让多账号运营更加稳定高效。',
          },
          {
            name: 'Emma Thompson',
            role: 'UX Designer，社媒运营',
            quote: '客户支持响应非常快，每次遇到问题时都能得到及时帮助。这不仅增强了我对产品的信任，也更愿意向团队推荐。',
          },
          {
            name: 'Sophia Wilson',
            role: 'Content Strategist，广告',
            quote: '我试过各种检测浏览器，但 Simprint 脱颖而出，因为它的速度和可靠性对我的业务至关重要。',
          },
          {
            name: 'Michael Carter',
            role: 'CTO，WEB3 行业',
            quote: '我真的很喜欢 Simprint 的直观设计。即使是新手也能很快上手，这是一个很大的优势。',
          },
        ]
      : [
          {
            name: 'Daniel Smith',
            role: 'Product Manager, Social Operations',
            quote: 'Simprint has one of the most approachable interfaces in the market while still offering the controls our team needs every day.',
          },
          {
            name: 'Andrew Johnson',
            role: 'Lead Developer, Data Collection',
            quote: 'The security model and frequent updates gave us much more confidence in how we manage large batches of browser environments.',
          },
          {
            name: 'Robert Davis',
            role: 'Marketing Director, Advertising',
            quote: 'Our team relies on Simprint for social media operations because profile transfers are smooth, stable, and easy to manage.',
          },
          {
            name: 'William Taylor',
            role: 'Software Engineer, E-commerce',
            quote: 'The customization options are strong. We can tune environments for different workflows without introducing unnecessary complexity.',
          },
          {
            name: 'Emma Thompson',
            role: 'UX Designer, Social Operations',
            quote: 'Customer support is consistently responsive. That matters when teams depend on the product every day for live operations.',
          },
          {
            name: 'Sophia Wilson',
            role: 'Content Strategist, Advertising',
            quote: 'We tested multiple anti-detect tools, but Simprint stood out because stability and speed directly affect business output.',
          },
          {
            name: 'Michael Carter',
            role: 'CTO, Web3',
            quote: 'The product feels direct and practical. Even new team members can understand the workflow quickly and start using it.',
          },
        ];
  const testimonialRows = [testimonials, [...testimonials].reverse()];
  const faqItems =
    currentLang === 'zh'
      ? [
          {
            q: 'Simprint 适合哪些出海业务场景？',
            a: 'Simprint 适用于跨境电商、广告投放、社媒运营、联盟营销以及需要多账号环境管理的团队场景。',
          },
          {
            q: 'Simprint 如何降低多账号关联风险？',
            a: '通过浏览器环境隔离、指纹参数控制、代理绑定与团队权限边界，帮助团队减少不同账号之间的环境重叠。',
          },
          {
            q: '团队成员可以一起使用 Simprint 吗？',
            a: '可以。Simprint 支持团队协作和权限分发，方便不同角色共享环境、分配任务并保持操作边界清晰。',
          },
          {
            q: 'Simprint 是否支持自动化工作流？',
            a: '支持。除了环境与身份管理之外，Simprint 也适合承载日常重复操作，让团队执行流程更稳定。',
          },
          {
            q: '如何开始使用 Simprint？',
            a: '你可以先下载产品，查看文档，随后通过 Telegram 或邮件联系我们，确认适合你业务场景的使用方式。',
          },
          {
            q: '遇到问题后如何联系支持？',
            a: '你可以通过 Telegram 或支持邮箱联系 Simprint 团队，我们会根据你的问题提供对应协助。',
          },
        ]
      : [
          {
            q: 'What overseas business scenarios is Simprint built for?',
            a: 'Simprint is suitable for cross-border e-commerce, advertising, social operations, affiliate marketing, and teams managing multiple account environments.',
          },
          {
            q: 'How does Simprint reduce multi-account correlation risk?',
            a: 'It combines environment isolation, fingerprint control, proxy binding, and team permission boundaries to reduce overlap between accounts.',
          },
          {
            q: 'Can teams use Simprint together?',
            a: 'Yes. Simprint supports team collaboration and permission distribution so different roles can share environments while keeping responsibilities clear.',
          },
          {
            q: 'Does Simprint support automated workflows?',
            a: 'Yes. Beyond environment and identity management, Simprint is also designed to support repeatable daily workflows with more consistency.',
          },
          {
            q: 'How do I get started with Simprint?',
            a: 'Start by downloading the product, reviewing the documentation, and then contact us through Telegram or email for guidance on your use case.',
          },
          {
            q: 'How can I reach support if I need help?',
            a: 'You can contact the Simprint team through Telegram or the support email address for direct assistance.',
          },
        ];

  useEffect(() => {
    let frameId = 0;
    const offsets = [0, 0];
    const speeds = [0.45, -0.4];

    const tick = () => {
      marqueeRefs.current.forEach((row, index) => {
        if (!row) return;

        const halfWidth = row.scrollWidth / 2;
        if (!halfWidth) return;

        offsets[index] += speeds[index];

        if (offsets[index] <= -halfWidth) {
          offsets[index] = 0;
        }

        if (offsets[index] >= 0 && speeds[index] > 0) {
          offsets[index] = -halfWidth;
        }

        row.style.transform = `translate3d(${offsets[index]}px, 0, 0)`;
      });

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [currentLang]);

  return (
    <main className="relative overflow-hidden pb-32">
      <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[8%] top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(13,92,255,0.16),transparent_68%)] blur-2xl"></div>
          <div className="absolute left-[10%] top-72 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.14),transparent_72%)] blur-2xl"></div>
          <div
            className="absolute inset-x-0 top-20 h-[34rem] opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(rgba(155,168,191,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(155,168,191,0.11) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)',
            }}
          ></div>
        </div>

        <div className="container-main relative z-[2]">
          <div className="reveal mx-auto max-w-[64rem] text-center">
            {t.hero.badge ? <div className="eyebrow">{t.hero.badge}</div> : null}
            <h1
              className={`mx-auto max-w-[13ch] font-[var(--font-display)] text-[clamp(3rem,6vw,5.6rem)] leading-[0.96] tracking-[-0.04em] text-[#0b1220] ${
                t.hero.badge ? 'mt-6' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            ></h1>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <LangLink href="/download" className="btn-system btn-primary">
                {t.hero.btn1}
              </LangLink>
              <LangLink href="/docs" className="btn-system btn-secondary">
                {t.hero.btn2}
              </LangLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase sm:gap-5">
              <span>独立环境</span>
              <span className="h-3.5 w-px bg-[rgba(108,132,170,0.28)]"></span>
              <span>团队协作</span>
              <span className="h-3.5 w-px bg-[rgba(108,132,170,0.28)]"></span>
              <span>自动化</span>
            </div>

          </div>

          <div className="reveal mx-auto mt-12 max-w-[64rem] lg:mt-14">
            <div className="overflow-hidden rounded-[2rem] border border-[rgba(108,132,170,0.18)] bg-white shadow-[0_30px_80px_rgba(73,103,146,0.14)]">
              <video
                className="block h-auto w-full"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="https://pub-39307a5e69c74324855a762027cbf9bf.r2.dev/hero.png"
              >
                <source src="https://pub-39307a5e69c74324855a762027cbf9bf.r2.dev/hero.mp4" type="video/mp4" />
                <img
                  src="https://pub-39307a5e69c74324855a762027cbf9bf.r2.dev/hero.png"
                  alt="Simprint product interface preview"
                  className="block h-auto w-full"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="lg:pr-10">
              <div className="eyebrow">{t.section04.label}</div>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4vw,3.6rem)] leading-none tracking-[-0.04em]">
                {currentLang === 'zh'
                  ? '围绕真实出海业务场景展开。'
                  : 'Built around the realities of overseas operations.'}
              </h2>
              <p className="mt-5 max-w-[34rem] leading-[1.85] text-[var(--text-muted)]">
                {currentLang === 'zh'
                  ? '从店铺管理到广告投放，再到社媒增长，Simprint 更强调实际业务中的稳定执行，而不是堆砌抽象功能。'
                  : 'From storefront management to paid media and social growth, Simprint focuses on stable execution in real workflows instead of abstract feature lists.'}
              </p>
            </div>

            <div className="border-t border-[rgba(108,132,170,0.14)] lg:border-t-0 lg:border-l lg:pl-10">
              <div className="space-y-0">
              {useCases.map((item, index) => (
                <article
                  key={item.title}
                  className="border-b border-[rgba(108,132,170,0.14)] py-7 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{`0${index + 1}`}</span>
                    <p className="text-[0.78rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.platforms}</p>
                  </div>
                  <h3 className="mt-4 font-[var(--font-display)] text-[1.3rem] tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 leading-[1.75] text-[var(--text-muted)]">{item.desc}</p>
                </article>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="reveal">
              <div className="relative min-h-[42rem] overflow-hidden rounded-[1.75rem] border border-[rgba(108,132,170,0.16)] bg-[radial-gradient(circle_at_20%_10%,rgba(87,139,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,248,255,0.92))] p-6 shadow-[0_22px_60px_rgba(89,115,153,0.08)] lg:min-h-[54rem] lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(108,132,170,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(108,132,170,0.06)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40"></div>
                <div className="relative z-[1] flex h-full flex-col justify-between">
                  <div className="h-16 lg:h-24"></div>

                  <div className="relative mx-auto flex h-[28rem] w-[28rem] items-center justify-center lg:h-[38rem] lg:w-[38rem]">
                    <div className="absolute inset-0 rounded-full border border-[#7dd3fc]/18"></div>
                    <div className="absolute inset-[7%] rounded-full border border-[#60a5fa]/16"></div>
                    <div className="absolute inset-[14%] rounded-full border border-[#93c5fd]/16"></div>
                    <div className="absolute inset-[21%] rounded-full border border-[#7dd3fc]/14"></div>
                    <div className="absolute inset-[28%] rounded-full border border-[#60a5fa]/12"></div>
                    <div className="absolute inset-[35%] rounded-full border border-[#dbeafe]/14"></div>
                    <div className="absolute inset-x-[14%] top-1/2 h-px -translate-y-1/2 bg-[#7dd3fc]/18"></div>
                    <div className="absolute inset-y-[14%] left-1/2 w-px -translate-x-1/2 bg-[#7dd3fc]/18"></div>
                    <div className="absolute h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.18),rgba(37,99,235,0.08)_42%,transparent_72%)] blur-2xl"></div>
                    <div className="absolute h-[42%] w-[42%] rounded-full border border-[#e0f2fe]/22 bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(186,230,253,0.4)_28%,rgba(37,99,235,0.08)_55%,transparent_72%)] shadow-[0_0_60px_rgba(125,211,252,0.24)]"></div>
                    <div className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.8)]"></div>
                    <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#7dd3fc] shadow-[0_0_18px_rgba(125,211,252,0.7)]"></div>
                    <div className="absolute right-[20%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#93c5fd] shadow-[0_0_18px_rgba(147,197,253,0.7)]"></div>
                    <div className="absolute bottom-[20%] left-[24%] h-2 w-2 rounded-full bg-[#38bdf8] shadow-[0_0_18px_rgba(56,189,248,0.7)]"></div>
                    <div className="absolute bottom-[18%] right-[24%] h-2 w-2 rounded-full bg-[#bfdbfe] shadow-[0_0_18px_rgba(191,219,254,0.7)]"></div>
                  </div>

                  <div className="grid gap-5 border-t border-[rgba(108,132,170,0.14)] pt-6 sm:grid-cols-3">
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        {currentLang === 'zh' ? '指纹维度' : 'Fingerprint Layers'}
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#0b1220]">
                        {currentLang === 'zh' ? 'Canvas / WebGL / Audio' : 'Canvas / WebGL / Audio'}
                      </p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-muted)]">
                        {currentLang === 'zh'
                          ? '覆盖浏览器环境中最容易形成识别特征的核心信号面。'
                          : 'Cover the primary surfaces most commonly used to build a browser fingerprint.'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        {currentLang === 'zh' ? '指纹状态' : 'Fingerprint State'}
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#0b1220]">
                        {currentLang === 'zh' ? '已隔离 / 已稳定' : 'Isolated / Stable'}
                      </p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-muted)]">
                        {currentLang === 'zh'
                          ? '不同配置文件之间保持清晰边界，减少环境交叉污染。'
                          : 'Maintain clear boundaries between profiles and reduce cross-environment leakage.'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        {currentLang === 'zh' ? '指纹一致性' : 'Fingerprint Consistency'}
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#0b1220]">99.98%</p>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-muted)]">
                        {currentLang === 'zh'
                          ? '帮助团队在批量运营时保持更自然、更可复用的身份参数。'
                          : 'Keep identity parameters more natural and repeatable during scaled operations.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="mt-40 py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="reveal grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-18">
            <div className="border-t border-[rgba(108,132,170,0.14)] pt-10 lg:pt-12">
              <div className="eyebrow">{t.metrics.label}</div>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4vw,3.6rem)] leading-none tracking-[-0.04em]">
                {currentLang === 'zh'
                  ? '让工作流与可信信号同时被看见。'
                  : 'Make workflow and trust visible at the same time.'}
              </h2>
              <p className="mt-5 max-w-[30rem] leading-[1.85] text-[var(--text-muted)]">
                {currentLang === 'zh'
                  ? '这块区域不再只是另一组说明，而是把团队关心的稳定性、执行顺序和运行状态压缩到同一视图里。'
                  : 'Instead of another explanation block, this section combines trust, execution order, and runtime signals into one readable surface.'}
              </p>
            </div>

            <div className="border-t border-[rgba(108,132,170,0.14)] pt-10 lg:pt-12 lg:pl-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {currentLang === 'zh' ? '可信工作流' : 'Trusted Workflow'}
                  </p>
                  <h3 className="mt-3 font-[var(--font-display)] text-[1.8rem] tracking-[-0.04em] text-[#0b1220]">
                    {currentLang === 'zh'
                      ? '让环境、权限与执行顺序保持一致。'
                      : 'Keep environments, permissions, and execution order aligned.'}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[var(--text-muted)]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <span>{currentLang === 'zh' ? '运行状态稳定' : 'Operationally stable'}</span>
                </div>
              </div>

              <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
                <div className="space-y-6">
                  {t.metrics.items.map((item) => (
                    <div key={item.label} className="border-b border-[rgba(108,132,170,0.14)] pb-5">
                      <p className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.label}</p>
                      <span className="mt-3 block font-[var(--font-display)] text-[2rem] tracking-[-0.04em] text-[#0b1220]">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="absolute left-[15px] top-[18px] bottom-[18px] w-px bg-[linear-gradient(180deg,rgba(13,92,255,0.24),rgba(13,92,255,0.06))]"></div>
                  <div className="space-y-8">
                    {t.workflow.steps.map((step, index) => (
                      <div key={step.title} className="relative flex gap-5">
                        <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(13,92,255,0.22)] bg-white text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                          {`0${index + 1}`}
                        </div>
                        <div className="pt-1">
                          <h4 className="font-[var(--font-display)] text-[1.15rem] tracking-[-0.03em] text-[#0b1220]">{step.title}</h4>
                          <p className="mt-2 max-w-[34rem] leading-[1.75] text-[var(--text-muted)]">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 overflow-hidden py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="reveal max-w-[56rem]">
            <div className="eyebrow">{currentLang === 'zh' ? '用户反馈' : 'Customer Voice'}</div>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.02] tracking-[-0.04em]">
              {currentLang === 'zh' ? '来自真实业务团队的使用反馈。' : 'Feedback from teams running real operations.'}
            </h2>
            <p className="mt-5 max-w-[40rem] leading-[1.85] text-[var(--text-muted)]">
              {currentLang === 'zh'
                ? '覆盖电商、广告、社媒与技术团队，帮助你更直接地了解 Simprint 在实际业务中的表现。'
                : 'Across e-commerce, advertising, social, and technical teams, these are the direct impressions people have while using Simprint in daily work.'}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-5">
          {testimonialRows.map((row, rowIndex) => (
            <div key={rowIndex} className="marquee-shell">
              <div
                ref={(node) => {
                  marqueeRefs.current[rowIndex] = node;
                }}
                className="marquee-row flex flex-nowrap gap-4"
              >
                {[...row, ...row].map((item, index) => (
                  <article
                    key={`${item.name}-${rowIndex}-${index}`}
                    className="min-w-[320px] max-w-[320px] shrink-0 rounded-[1.4rem] border border-[rgba(108,132,170,0.14)] bg-white/85 p-6 shadow-[0_18px_40px_rgba(89,115,153,0.08)] backdrop-blur-[14px]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={avatarUrls[index % avatarUrls.length]}
                        alt={item.name}
                        className="h-10 w-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#0b1220]">{item.name}</h3>
                        <p className="text-[13px] text-[var(--text-muted)]">{item.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 line-clamp-4 text-[15px] leading-[1.9] text-[var(--text-muted)]">{item.quote}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-40 py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
            <div className="reveal">
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.6rem)] leading-none tracking-[-0.04em] text-[#0b1220]">
                {currentLang === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
              </h2>
              <p className="mt-5 max-w-[28rem] leading-[1.85] text-[var(--text-muted)]">
                {currentLang === 'zh'
                  ? '有疑问？我们随时为您提供帮助。'
                  : 'Have questions? We are ready to help you.'}
              </p>

              <div className="mt-14">
                <h3 className="font-[var(--font-display)] text-[2rem] tracking-[-0.04em] text-[#0b1220]">
                  {currentLang === 'zh' ? '在线技术支持' : 'Online Support'}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://t.me/simprintapp"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[156px] w-[176px] flex-col items-center justify-center rounded-[1.2rem] border border-[rgba(108,132,170,0.16)] bg-white text-center transition-colors duration-200 hover:border-[rgba(13,92,255,0.24)] hover:bg-[rgba(13,92,255,0.03)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border border-[rgba(56,166,232,0.18)] bg-[rgba(56,166,232,0.1)] text-[30px] text-[#2495d8]">✈</div>
                    <span className="mt-5 text-[19px] font-medium text-[#0b1220]">Telegram</span>
                  </a>
                  <a
                    href="mailto:support@simprint.app"
                    className="flex h-[156px] w-[176px] flex-col items-center justify-center rounded-[1.2rem] border border-[rgba(108,132,170,0.16)] bg-white text-center transition-colors duration-200 hover:border-[rgba(37,99,235,0.24)] hover:bg-[rgba(37,99,235,0.03)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border border-[rgba(37,99,235,0.18)] bg-[rgba(37,99,235,0.08)] text-[26px] text-[#2563eb]">✉</div>
                    <span className="mt-5 text-[19px] font-medium text-[#0b1220]">Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal space-y-0 border-t border-[rgba(108,132,170,0.14)] lg:border-t-0">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div key={item.q} className="border-b border-[rgba(108,132,170,0.14)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <span className="font-[var(--font-display)] text-[1.2rem] tracking-[-0.03em] text-[#0b1220]">{item.q}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(108,132,170,0.08)] text-[20px] text-[#0b1220]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen ? <p className="max-w-[48rem] pb-7 pr-12 leading-[1.85] text-[var(--text-muted)]">{item.a}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 py-6 lg:mt-56 lg:py-10">
        <div className="container-main">
          <div className="reveal flex flex-col gap-8 rounded-[1.8rem] border border-[rgba(108,132,170,0.16)] bg-[rgba(255,255,255,0.74)] p-8 shadow-[0_22px_60px_rgba(89,115,153,0.08)] backdrop-blur-[16px] lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-[44rem]">
              <div className="eyebrow">Simprint</div>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,4vw,3.6rem)] leading-none tracking-[-0.04em]">
                {t.cta.title}
              </h2>
              <p className="mt-4 leading-[1.7] text-[var(--text-muted)]">{t.cta.desc}</p>
            </div>
            <LangLink href="/download" className="btn-system btn-primary">
              {t.cta.btn}
            </LangLink>
          </div>
        </div>
      </section>
    </main>
  );
}
