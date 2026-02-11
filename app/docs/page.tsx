'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useCursorGlow } from '@/hooks/useCursorGlow';

const docsTranslations = {
  en: {
    topNav: {
      docs: 'Docs',
      download: 'Download',
      console: 'Console',
    },
    cat: {
      gettingStarted: 'Getting Started',
      coreFeatures: 'Core Features',
      team: 'Team & Sync',
      advanced: 'Advanced',
      support: 'Support',
    },
    nav: {
      intro: 'Introduction',
      install: 'Installation',
      quickstart: 'Quick Start',
      profiles: 'Browser Profiles',
      fingerprint: 'Fingerprint Settings',
      proxy: 'Proxy Configuration',
      cookies: 'Cookie Management',
      team: 'Team Collaboration',
      sync: 'Cloud Sync',
      api: 'API Reference',
      automation: 'Automation',
      faq: 'FAQ',
      troubleshooting: 'Troubleshooting',
    },
    content: {
      intro: {
        title: 'Introduction',
        text1:
          'Simprint is a professional anti-detect browser designed for secure multi-account management. It creates isolated browser environments with unique fingerprints, preventing platforms from detecting account associations.',
        text2:
          "Whether you're managing e-commerce stores, advertising accounts, or social media profiles, Simprint provides the security and isolation you need to operate at scale.",
        subtitle: 'Key Features',
        feature1: 'Unique browser fingerprints for each profile (Canvas, WebGL, Audio, Fonts)',
        feature2: 'Complete environment isolation with separate cookies, cache, and storage',
        feature3: 'Built-in proxy management with support for HTTP, SOCKS5, and residential proxies',
        feature4: 'Team collaboration with role-based access control',
        feature5: 'Cloud sync for seamless profile sharing across devices',
      },
      install: {
        title: 'Installation',
        text1: 'Simprint is currently available for Windows. Download the installer from our official website and follow the installation wizard.',
        subtitle: 'System Requirements',
        component: 'Component',
        minimum: 'Minimum',
        recommended: 'Recommended',
        osLabel: 'Operating System',
        ramLabel: 'RAM',
        storageLabel: 'Storage',
        cpuLabel: 'CPU',
        tip: 'For optimal performance when running multiple browser profiles simultaneously, we recommend using an SSD and at least 16GB of RAM.',
      },
      quickstart: {
        title: 'Quick Start',
        text1: 'Get up and running with Simprint in just a few minutes. Follow these steps to create your first browser profile.',
        step1: 'Step 1: Create a New Profile',
        step1Text: 'Click the "New Profile" button in the main dashboard. Give your profile a descriptive name and select the operating system and browser type to emulate.',
        step2: 'Step 2: Configure Fingerprint',
        step2Text:
          'Simprint automatically generates a unique fingerprint for each profile. You can customize specific parameters or use the "Randomize" button for a completely new identity.',
        step3: 'Step 3: Add Proxy (Optional)',
        step3Text: 'For enhanced anonymity, add a proxy to your profile. Simprint supports HTTP, HTTPS, SOCKS4, and SOCKS5 proxies.',
        step4: 'Step 4: Launch Browser',
        step4Text: 'Click "Start" to launch the browser with your configured profile. Each profile runs in complete isolation from others.',
        warning: 'Always use a unique proxy IP for each profile to maximize anonymity and prevent correlation.',
      },
      profiles: {
        title: 'Browser Profiles',
        text1:
          'Browser profiles are the core of Simprint. Each profile represents a completely isolated browser environment with its own fingerprint, cookies, local storage, and cache.',
        subtitle: 'Profile Management',
        create: 'Create unlimited profiles with unique identities',
        clone: 'Clone existing profiles to quickly duplicate settings',
        organize: 'Organize profiles into folders and groups',
        tags: 'Add tags for easy filtering and search',
        export: 'Export and import profiles for backup or migration',
      },
      fingerprint: {
        title: 'Fingerprint Settings',
        text1:
          'Simprint provides comprehensive fingerprint customization to ensure each browser profile has a unique, consistent identity that passes all major detection platforms.',
        subtitle: 'Configurable Parameters',
        parameter: 'Parameter',
        description: 'Description',
        useragent: 'Browser and OS identification string',
        screen: 'Display dimensions and color depth',
        webgl: 'Graphics card vendor and renderer',
        canvas: 'Unique canvas rendering signature',
        audio: 'Audio processing fingerprint',
        fonts: 'Installed system fonts list',
        timezone: 'Geographic timezone setting',
        language: 'Browser language preferences',
      },
      proxy: {
        title: 'Proxy Configuration',
        text1: 'Combine unique fingerprints with dedicated proxy IPs for maximum anonymity. Simprint supports all major proxy protocols.',
        subtitle: 'Supported Proxy Types',
        residential: 'Residential Proxies',
        mobile: 'Mobile Proxies',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'How many profiles can I create?',
        a1: 'There is no limit to the number of profiles you can create. However, running multiple profiles simultaneously will consume more system resources.',
        q2: 'Does Simprint pass all detection tests?',
        a2: 'Simprint is designed to pass all major browser fingerprint detection platforms including CreepJS, FingerprintJS, and Pixelscan. We continuously update our fingerprint engine to stay ahead of new detection methods.',
        q3: 'Can I use my own proxies?',
        a3: 'Yes, Simprint supports any HTTP, HTTPS, SOCKS4, or SOCKS5 proxy. You can also integrate with popular proxy providers through our API.',
      },
    },
  },
  zh: {
    topNav: {
      docs: '文档',
      download: '下载',
      console: '控制台',
    },
    cat: {
      gettingStarted: '快速入门',
      coreFeatures: '核心功能',
      team: '团队与同步',
      advanced: '高级功能',
      support: '支持',
    },
    nav: {
      intro: '简介',
      install: '安装',
      quickstart: '快速开始',
      profiles: '浏览器配置',
      fingerprint: '指纹设置',
      proxy: '代理配置',
      cookies: 'Cookie 管理',
      team: '团队协作',
      sync: '云同步',
      api: 'API 参考',
      automation: '自动化',
      faq: '常见问题',
      troubleshooting: '故障排除',
    },
    content: {
      intro: {
        title: '简介',
        text1:
          'Simprint 是一款专为安全多账号管理设计的专业反检测浏览器。它创建具有独特指纹的隔离浏览器环境，防止平台检测到账号关联。',
        text2:
          '无论您是在管理电商店铺、广告账户还是社交媒体账号，Simprint 都能提供您大规模运营所需的安全性和隔离性。',
        subtitle: '核心功能',
        feature1: '每个配置文件的独特浏览器指纹（Canvas、WebGL、音频、字体）',
        feature2: '完全的环境隔离，包括独立的 Cookie、缓存和存储',
        feature3: '内置代理管理，支持 HTTP、SOCKS5 和住宅代理',
        feature4: '基于角色的团队协作访问控制',
        feature5: '云端同步，实现跨设备无缝配置文件共享',
      },
      install: {
        title: '安装',
        text1: 'Simprint 目前支持 Windows。从我们的官方网站下载安装程序，然后按照安装向导进行操作。',
        subtitle: '系统要求',
        component: '组件',
        minimum: '最低',
        recommended: '推荐',
        osLabel: '操作系统',
        ramLabel: '内存',
        storageLabel: '存储',
        cpuLabel: 'CPU',
        tip: '为了在同时运行多个浏览器配置文件时获得最佳性能，我们建议使用 SSD 和至少 16GB 的内存。',
      },
      quickstart: {
        title: '快速开始',
        text1: '只需几分钟即可开始使用 Simprint。按照以下步骤创建您的第一个浏览器配置文件。',
        step1: '步骤 1：创建新配置文件',
        step1Text: '在主仪表板中点击"新建配置文件"按钮。为您的配置文件起一个描述性名称，并选择要模拟的操作系统和浏览器类型。',
        step2: '步骤 2：配置指纹',
        step2Text:
          'Simprint 会自动为每个配置文件生成独特的指纹。您可以自定义特定参数，或使用"随机化"按钮创建全新的身份。',
        step3: '步骤 3：添加代理（可选）',
        step3Text: '为了增强匿名性，请为您的配置文件添加代理。Simprint 支持 HTTP、HTTPS、SOCKS4 和 SOCKS5 代理。',
        step4: '步骤 4：启动浏览器',
        step4Text: '点击"启动"以使用您配置的配置文件启动浏览器。每个配置文件都在完全隔离的环境中运行。',
        warning: '始终为每个配置文件使用唯一的代理 IP，以最大化匿名性并防止关联。',
      },
      profiles: {
        title: '浏览器配置文件',
        text1:
          '浏览器配置文件是 Simprint 的核心。每个配置文件代表一个完全隔离的浏览器环境，具有自己的指纹、Cookie、本地存储和缓存。',
        subtitle: '配置文件管理',
        create: '创建具有独特身份的无限制配置文件',
        clone: '克隆现有配置文件以快速复制设置',
        organize: '将配置文件组织到文件夹和组中',
        tags: '添加标签以便于过滤和搜索',
        export: '导出和导入配置文件以进行备份或迁移',
      },
      fingerprint: {
        title: '指纹设置',
        text1:
          'Simprint 提供全面的指纹自定义功能，确保每个浏览器配置文件都具有独特、一致的身份，能够通过所有主要检测平台。',
        subtitle: '可配置参数',
        parameter: '参数',
        description: '描述',
        useragent: '浏览器和操作系统标识字符串',
        screen: '显示尺寸和颜色深度',
        webgl: '显卡供应商和渲染器',
        canvas: '独特的 Canvas 渲染签名',
        audio: '音频处理指纹',
        fonts: '已安装的系统字体列表',
        timezone: '地理时区设置',
        language: '浏览器语言偏好',
      },
      proxy: {
        title: '代理配置',
        text1: '将独特的指纹与专用代理 IP 结合使用，以实现最大匿名性。Simprint 支持所有主要代理协议。',
        subtitle: '支持的代理类型',
        residential: '住宅代理',
        mobile: '移动代理',
      },
      faq: {
        title: '常见问题',
        q1: '我可以创建多少个配置文件？',
        a1: '您可以创建的配置文件数量没有限制。但是，同时运行多个配置文件会消耗更多系统资源。',
        q2: 'Simprint 是否通过所有检测测试？',
        a2: 'Simprint 旨在通过所有主要的浏览器指纹检测平台，包括 CreepJS、FingerprintJS 和 Pixelscan。我们不断更新指纹引擎，以领先于新的检测方法。',
        q3: '我可以使用自己的代理吗？',
        a3: '是的，Simprint 支持任何 HTTP、HTTPS、SOCKS4 或 SOCKS5 代理。您还可以通过我们的 API 与流行的代理提供商集成。',
      },
    },
  },
};

export default function DocsPage() {
  const { currentLang } = useLanguage();
  useCursorGlow();
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, [currentLang]);

  const t = docsTranslations[currentLang];

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.doc-section');

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const sectionId = (item as HTMLElement).dataset.section;
        const section = document.getElementById(sectionId || '');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId || '');
          navItems.forEach((nav) => nav.classList.remove('active'));
          item.classList.add('active');
        }
      });
    });

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
      navItems.forEach((item) => {
        item.classList.remove('active');
        if ((item as HTMLElement).dataset.section === current) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="docs-container">
        <aside className="sidebar" id="sidebar">
          <div className="nav-category">
            <div className="nav-category-title">{t.cat.gettingStarted}</div>
            <div
              className={`nav-item ${activeSection === 'introduction' ? 'active' : ''}`}
              data-section="introduction"
            >
              <i data-lucide="book-open"></i>
              <span>{t.nav.intro}</span>
            </div>
            <div
              className={`nav-item ${activeSection === 'installation' ? 'active' : ''}`}
              data-section="installation"
            >
              <i data-lucide="download"></i>
              <span>{t.nav.install}</span>
            </div>
            <div
              className={`nav-item ${activeSection === 'quickstart' ? 'active' : ''}`}
              data-section="quickstart"
            >
              <i data-lucide="zap"></i>
              <span>{t.nav.quickstart}</span>
            </div>
          </div>

          <div className="nav-category">
            <div className="nav-category-title">{t.cat.coreFeatures}</div>
            <div
              className={`nav-item ${activeSection === 'profiles' ? 'active' : ''}`}
              data-section="profiles"
            >
              <i data-lucide="user-circle"></i>
              <span>{t.nav.profiles}</span>
            </div>
            <div
              className={`nav-item ${activeSection === 'fingerprint' ? 'active' : ''}`}
              data-section="fingerprint"
            >
              <i data-lucide="fingerprint"></i>
              <span>{t.nav.fingerprint}</span>
            </div>
            <div className={`nav-item ${activeSection === 'proxy' ? 'active' : ''}`} data-section="proxy">
              <i data-lucide="globe"></i>
              <span>{t.nav.proxy}</span>
            </div>
          </div>

          <div className="nav-category">
            <div className="nav-category-title">{t.cat.support}</div>
            <div className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`} data-section="faq">
              <i data-lucide="help-circle"></i>
              <span>{t.nav.faq}</span>
            </div>
          </div>
        </aside>

        <main className="main-content pt-14">
          <section className="doc-section" id="introduction">
            <h1 className="doc-title">
              <i data-lucide="book-open" className="w-8 h-8"></i>
              <span>{t.content.intro.title}</span>
            </h1>
            <p className="doc-text">{t.content.intro.text1}</p>
            <p className="doc-text">{t.content.intro.text2}</p>

            <h2 className="doc-subtitle">{t.content.intro.subtitle}</h2>
            <ul className="feature-list">
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.intro.feature1}</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.intro.feature2}</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.intro.feature3}</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.intro.feature4}</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.intro.feature5}</span>
              </li>
            </ul>
          </section>

          <section className="doc-section" id="installation">
            <h1 className="doc-title">
              <i data-lucide="download" className="w-8 h-8"></i>
              <span>{t.content.install.title}</span>
            </h1>
            <p className="doc-text">{t.content.install.text1}</p>

            <h2 className="doc-subtitle">{t.content.install.subtitle}</h2>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>{t.content.install.component}</th>
                  <th>{t.content.install.minimum}</th>
                  <th>{t.content.install.recommended}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t.content.install.osLabel}</td>
                  <td>Windows 10 64-bit</td>
                  <td>Windows 11 64-bit</td>
                </tr>
                <tr>
                  <td>{t.content.install.ramLabel}</td>
                  <td>8 GB</td>
                  <td>16 GB+</td>
                </tr>
                <tr>
                  <td>{t.content.install.storageLabel}</td>
                  <td>500 MB</td>
                  <td>2 GB+ SSD</td>
                </tr>
                <tr>
                  <td>{t.content.install.cpuLabel}</td>
                  <td>Dual-core 2.0 GHz</td>
                  <td>Quad-core 3.0 GHz+</td>
                </tr>
              </tbody>
            </table>

            <div className="tip-box">
              <i data-lucide="info" className="w-5 h-5"></i>
              <p>{t.content.install.tip}</p>
            </div>
          </section>

          <section className="doc-section" id="quickstart">
            <h1 className="doc-title">
              <i data-lucide="zap" className="w-8 h-8"></i>
              <span>{t.content.quickstart.title}</span>
            </h1>
            <p className="doc-text">{t.content.quickstart.text1}</p>

            <h2 className="doc-subtitle">{t.content.quickstart.step1}</h2>
            <p className="doc-text">{t.content.quickstart.step1Text}</p>

            <h2 className="doc-subtitle">{t.content.quickstart.step2}</h2>
            <p className="doc-text">{t.content.quickstart.step2Text}</p>

            <div className="code-block">
              <code>
                <span className="code-comment">// Example fingerprint configuration</span>
                <br />
                {'{'}
                <br />
                {'  '}
                <span className="code-string">"userAgent"</span>: <span className="code-string">"Mozilla/5.0..."</span>,
                <br />
                {'  '}
                <span className="code-string">"screenResolution"</span>: [<span className="code-number">1920</span>,{' '}
                <span className="code-number">1080</span>],
                <br />
                {'  '}
                <span className="code-string">"timezone"</span>: <span className="code-string">"America/New_York"</span>,
                <br />
                {'}'}
              </code>
            </div>

            <h2 className="doc-subtitle">{t.content.quickstart.step3}</h2>
            <p className="doc-text">{t.content.quickstart.step3Text}</p>

            <h2 className="doc-subtitle">{t.content.quickstart.step4}</h2>
            <p className="doc-text">{t.content.quickstart.step4Text}</p>

            <div className="warning-box tip-box">
              <i data-lucide="alert-triangle" className="w-5 h-5"></i>
              <p>{t.content.quickstart.warning}</p>
            </div>
          </section>

          <section className="doc-section" id="profiles">
            <h1 className="doc-title">
              <i data-lucide="user-circle" className="w-8 h-8"></i>
              <span>{t.content.profiles.title}</span>
            </h1>
            <p className="doc-text">{t.content.profiles.text1}</p>

            <h2 className="doc-subtitle">{t.content.profiles.subtitle}</h2>
            <ul className="feature-list">
              <li>
                <i data-lucide="plus" className="w-5 h-5"></i>
                <span>{t.content.profiles.create}</span>
              </li>
              <li>
                <i data-lucide="copy" className="w-5 h-5"></i>
                <span>{t.content.profiles.clone}</span>
              </li>
              <li>
                <i data-lucide="folder" className="w-5 h-5"></i>
                <span>{t.content.profiles.organize}</span>
              </li>
              <li>
                <i data-lucide="tag" className="w-5 h-5"></i>
                <span>{t.content.profiles.tags}</span>
              </li>
              <li>
                <i data-lucide="archive" className="w-5 h-5"></i>
                <span>{t.content.profiles.export}</span>
              </li>
            </ul>
          </section>

          <section className="doc-section" id="fingerprint">
            <h1 className="doc-title">
              <i data-lucide="fingerprint" className="w-8 h-8"></i>
              <span>{t.content.fingerprint.title}</span>
            </h1>
            <p className="doc-text">{t.content.fingerprint.text1}</p>

            <h2 className="doc-subtitle">{t.content.fingerprint.subtitle}</h2>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>{t.content.fingerprint.parameter}</th>
                  <th>{t.content.fingerprint.description}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>User Agent</td>
                  <td>{t.content.fingerprint.useragent}</td>
                </tr>
                <tr>
                  <td>Screen Resolution</td>
                  <td>{t.content.fingerprint.screen}</td>
                </tr>
                <tr>
                  <td>WebGL</td>
                  <td>{t.content.fingerprint.webgl}</td>
                </tr>
                <tr>
                  <td>Canvas</td>
                  <td>{t.content.fingerprint.canvas}</td>
                </tr>
                <tr>
                  <td>Audio Context</td>
                  <td>{t.content.fingerprint.audio}</td>
                </tr>
                <tr>
                  <td>Fonts</td>
                  <td>{t.content.fingerprint.fonts}</td>
                </tr>
                <tr>
                  <td>Timezone</td>
                  <td>{t.content.fingerprint.timezone}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{t.content.fingerprint.language}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="doc-section" id="proxy">
            <h1 className="doc-title">
              <i data-lucide="globe" className="w-8 h-8"></i>
              <span>{t.content.proxy.title}</span>
            </h1>
            <p className="doc-text">{t.content.proxy.text1}</p>

            <h2 className="doc-subtitle">{t.content.proxy.subtitle}</h2>
            <ul className="feature-list">
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>HTTP / HTTPS</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>SOCKS4 / SOCKS5</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.proxy.residential}</span>
              </li>
              <li>
                <i data-lucide="check" className="w-5 h-5"></i>
                <span>{t.content.proxy.mobile}</span>
              </li>
            </ul>
          </section>

          <section className="doc-section" id="faq">
            <h1 className="doc-title">
              <i data-lucide="help-circle" className="w-8 h-8"></i>
              <span>{t.content.faq.title}</span>
            </h1>

            <h2 className="doc-subtitle">{t.content.faq.q1}</h2>
            <p className="doc-text">{t.content.faq.a1}</p>

            <h2 className="doc-subtitle">{t.content.faq.q2}</h2>
            <p className="doc-text">{t.content.faq.a2}</p>

            <h2 className="doc-subtitle">{t.content.faq.q3}</h2>
            <p className="doc-text">{t.content.faq.a3}</p>
          </section>
        </main>
      </div>
    </>
  );
}
