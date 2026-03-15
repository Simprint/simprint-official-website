export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: { docs: 'Docs', download: 'Download', console: 'Console' },
    hero: {
      badge: '',
      title: 'Powering smarter<br>global growth.',
      desc: 'Built for teams that need safer, more stable multi-account operations.',
      btn1: 'Download Now',
      btn2: 'Documentation',
      panelTitle: 'Product Overview',
      panelDesc: 'Manage browser environments, identity settings, and team workflows in one secure workspace.',
      proof1Label: 'Profiles isolated',
      proof1Value: '10k+',
      proof2Label: 'Fingerprint variables',
      proof2Value: '100+',
      proof3Label: 'Team-ready controls',
      proof3Value: 'RBAC',
    },
    metrics: {
      label: 'Trusted Workflow',
      title: 'Built for teams that need stable, repeatable multi-account operations.',
      desc: 'Simprint helps teams manage isolated browser environments, consistent identity settings, and coordinated account workflows in one place.',
      items: [
        { value: '99.98%', label: 'Fingerprint uniqueness' },
        { value: '< 3 min', label: 'Profile provisioning' },
        { value: '24/7', label: 'Operational continuity' },
      ],
    },
    section02: {
      label: 'Account Correlation Risk',
      title: 'Eliminate<br>fingerprint linking.',
      desc: 'The biggest risk in multi-account operations comes from browser fingerprint correlation. Identical Canvas, WebGL, and font signatures allow platforms to detect linked accounts, resulting in mass bans.',
      stat1: 'Fingerprint Uniqueness',
      stat2: 'Detection Pass Rate',
    },
    section03: {
      label: 'Core Technology',
      title: 'Core controls for secure multi-account execution.',
      card1: {
        title: 'Fingerprint Engine',
        desc: 'Deep Chromium kernel customization. Authentic simulation of 100+ fingerprint parameters including Canvas, WebGL, Audio, and Fonts. Passes all major detection platforms.',
      },
      card2: {
        title: 'Environment Isolation',
        desc: 'Each browser profile has isolated cookies, cache, and local storage. Combined with dedicated proxy IPs, achieve complete separation between accounts.',
      },
      card3: {
        title: 'Team Collaboration',
        desc: 'Cloud sync and team sharing for browser profiles. Granular permission controls enable distributed teams to efficiently manage thousands of accounts together.',
      },
    },
    workflow: {
      label: 'Operator Flow',
      title: 'From provisioning to execution, the system stays legible.',
      steps: [
        {
          title: 'Provision',
          desc: 'Create isolated profiles with reproducible fingerprint presets and dedicated proxy assignments.',
        },
        {
          title: 'Control',
          desc: 'Distribute environments through team permissions, shared assets, and clear responsibility boundaries.',
        },
        {
          title: 'Automate',
          desc: 'Run repetitive tasks through workflows without collapsing environments into one detectable pattern.',
        },
      ],
    },
    section04: {
      label: 'Use Cases',
      title: 'Built for Scale.',
      case1: {
        title: 'E-commerce Operations',
        platforms: 'Amazon / eBay / Shopee',
        desc: 'Securely manage multiple storefronts with isolated browser environments and dedicated IPs. Avoid multi-store correlation detection and protect your business assets.',
      },
      case2: {
        title: 'Advertising Management',
        platforms: 'Facebook / Google / TikTok',
        desc: 'Manage ad accounts at scale with complete asset isolation. Prevent cascading bans from single account issues and maximize campaign efficiency and account longevity.',
      },
      case3: {
        title: 'Social Media Matrix',
        platforms: 'Twitter / Instagram / YouTube',
        desc: 'Operate multiple social accounts simultaneously to build your brand presence. Each account runs in its own isolated environment for safe content distribution and engagement.',
      },
    },
    cta: {
      title: 'Ready to Scale Securely.',
      desc: 'Simprint provides enterprise-grade anti-detect browser solutions for professional teams. Start your free trial and experience truly secure multi-account management.',
      btn: 'Start Free Trial',
    },
    footer: { help: 'Help Center', privacy: 'Privacy', status: 'Status: Operational' },
  },
  zh: {
    nav: { docs: '文档', download: '下载', console: '控制台' },
    hero: {
      badge: '',
      title: '助力企业开展<br>出海业务',
      desc: '为更安全、更稳定的多账号运营而打造。',
      btn1: '立即下载',
      btn2: '查看文档',
      panelTitle: '产品概览',
      panelDesc: '在同一套安全工作区中管理浏览器环境、身份参数和团队协作流程。',
      proof1Label: '隔离配置文件',
      proof1Value: '10k+',
      proof2Label: '指纹变量',
      proof2Value: '100+',
      proof3Label: '团队权限控制',
      proof3Value: 'RBAC',
    },
    metrics: {
      label: '可信工作流',
      title: '为需要稳定、可重复执行的多账号运营团队而打造。',
      desc: 'Simprint 将隔离环境、身份参数控制和团队协作整合到同一套工作流中，帮助团队更安全地管理多账号任务。',
      items: [
        { value: '99.98%', label: '指纹唯一性' },
        { value: '< 3 分钟', label: '配置文件初始化' },
        { value: '24/7', label: '持续运营能力' },
      ],
    },
    section02: {
      label: '账号关联风险',
      title: '消除指纹关联',
      desc: '多账号运营的最大风险来自浏览器指纹关联。相同的 Canvas、WebGL 和字体签名会让平台检测到关联账号，导致大规模封禁。',
      stat1: '指纹唯一性',
      stat2: '检测通过率',
    },
    section03: {
      label: '核心技术',
      title: '支撑安全多账号运营的核心控制能力。',
      card1: {
        title: '指纹引擎',
        desc: '深度 Chromium 内核定制。真实模拟 100+ 指纹参数，包括 Canvas、WebGL、音频和字体。通过所有主流检测平台。',
      },
      card2: {
        title: '环境隔离',
        desc: '每个浏览器配置文件都有独立的 Cookie、缓存和本地存储。结合专用代理 IP，实现账号之间的完全隔离。',
      },
      card3: {
        title: '团队协作',
        desc: '浏览器配置文件的云端同步和团队共享。精细的权限控制让分布式团队能够高效地共同管理数千个账号。',
      },
    },
    workflow: {
      label: '操作流程',
      title: '从初始化到执行，整个系统都保持清晰可读。',
      steps: [
        {
          title: '初始化',
          desc: '通过可复用的指纹预设和独立代理分配，快速创建隔离配置文件。',
        },
        {
          title: '控制',
          desc: '借助团队权限、共享资产与明确责任边界，把环境安全分发给成员。',
        },
        {
          title: '自动化',
          desc: '通过工作流执行重复任务，同时避免把多个环境压缩成同一种可检测模式。',
        },
      ],
    },
    section04: {
      label: '应用场景',
      title: '为规模而生',
      case1: {
        title: '电商运营',
        platforms: 'Amazon / eBay / Shopee',
        desc: '通过隔离的浏览器环境和专用 IP 安全管理多个店铺。避免多店铺关联检测，保护您的商业资产。',
      },
      case2: {
        title: '广告投放',
        platforms: 'Facebook / Google / TikTok',
        desc: '通过完全的资产隔离大规模管理广告账户。防止单个账户问题引发连锁封禁，最大化投放效率和账户寿命。',
      },
      case3: {
        title: '社媒矩阵',
        platforms: 'Twitter / Instagram / YouTube',
        desc: '同时运营多个社交账号，打造品牌影响力。每个账号都在独立的隔离环境中运行，安全地进行内容分发和互动。',
      },
    },
    cta: {
      title: '安全扩展，即刻启程',
      desc: 'Simprint 为专业团队提供企业级反检测浏览器解决方案。立即开始免费试用，体验真正安全的多账号管理。',
      btn: '免费试用',
    },
    footer: { help: '帮助中心', privacy: '隐私政策', status: '状态：正常运行' },
  },
};
