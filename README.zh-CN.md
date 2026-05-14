<div align="center">
  <img src="./public/logo.png" alt="Simprint Logo" width="120" />
  <h1>Simprint Official Website</h1>
  <p>面向 Simprint 的官网、文档入口与下载门户。</p>
  <p>
    <img alt="License AGPLv3" src="https://img.shields.io/badge/license-AGPLv3-67e8f9?style=flat-square&labelColor=0f172a" />
    <img alt="Framework Next.js 16" src="https://img.shields.io/badge/framework-Next.js%2016-111827?style=flat-square&labelColor=0f172a" />
    <img alt="UI React 19" src="https://img.shields.io/badge/ui-React%2019-60a5fa?style=flat-square&labelColor=0f172a" />
  </p>
  <p>
    <a href="./README.md">English</a> | <strong>简体中文</strong>
  </p>
</div>

---

## 介绍

Simprint Official Website 是 Simprint 的公开网站项目，负责官网落地页、文档入口、多语言页面以及客户端下载流程等对外 Web 能力。

它主要面向官网部署、文档发布和官方安装包分发，而不是桌面客户端运行时本身的一部分。

## 为什么需要 Simprint Official Website？

Simprint 生态并不只有桌面客户端。产品介绍、文档导航、版本下载以及多语言内容都需要一层稳定的 Web 入口，并且这部分能力应当能够独立于客户端运行时持续演进。

这个仓库的意义，就是把这层官网与文档入口显式拆出来并保持可维护，而不是把营销页面和文档内容混进桌面应用本体中。

## 特性

- **官网落地页**：承载 Simprint 的产品介绍与公开展示内容。
- **多语言路由**：通过路由级结构支持英文与简体中文页面。
- **文档入口**：在网站层暴露文档导航与 API 相关页面。
- **下载门户**：提供下载页面以及服务端下载跳转接口。
- **基础搜索与索引支持**：包含 robots 与 sitemap 相关页面，便于公开索引。

## 快速开始

### 前置要求

- Node.js 20+
- `pnpm`

### 本地运行

```bash
pnpm install
pnpm dev
```

### 生产构建

```bash
pnpm build
pnpm start
```

## 状态

Simprint Official Website 目前正在作为 Simprint 整体开源重构工作的一部分持续整理。

当前仓库已经可以使用，但围绕内容结构、文档组织方式和下载流程细节的部分内容，仍在持续完善，以便后续长期维护。

## 许可

本项目采用 GNU Affero General Public License v3.0 (AGPLv3) 进行许可。

如果你希望在不履行 AGPLv3 义务的前提下使用 Simprint Official Website，包括分发修改版本或以闭源服务形式提供修改版本，请联系获取商业许可。
