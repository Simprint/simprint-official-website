<div align="center">
  <img src="./public/logo.png" alt="Simprint Logo" width="120" />
  <h1>Simprint Official Website</h1>
  <p>Marketing site, docs entry, and download portal for Simprint.</p>
  <p>
    <img alt="License AGPLv3" src="https://img.shields.io/badge/license-AGPLv3-67e8f9?style=flat-square&labelColor=0f172a" />
    <img alt="Framework Next.js 16" src="https://img.shields.io/badge/framework-Next.js%2016-111827?style=flat-square&labelColor=0f172a" />
    <img alt="UI React 19" src="https://img.shields.io/badge/ui-React%2019-60a5fa?style=flat-square&labelColor=0f172a" />
  </p>
  <p>
    <strong>English</strong> | <a href="./README.zh-CN.md">简体中文</a>
  </p>
</div>

---

## Introduction

Simprint Official Website is the public-facing website for Simprint. It provides the landing pages, documentation entry, localized routes, and download flows used to present the product and distribute client builds.

It is intended for self-hosted website deployment, documentation publishing, and official download distribution rather than as part of the desktop runtime itself.

## Why Simprint Official Website?

The Simprint ecosystem needs more than just the desktop client. Product messaging, documentation navigation, release downloads, and localized content all need a stable web surface that can evolve independently from the client runtime.

This repository exists to keep that surface explicit and maintainable. Instead of mixing the marketing site and documentation entry into the desktop app, Simprint Official Website provides a dedicated Next.js project for public web delivery.

## Features

- **Official landing pages**: Serve the main Simprint product presentation and product narrative.
- **Localized routes**: Support English and Simplified Chinese pages through route-level localization.
- **Documentation entry**: Expose docs navigation and API-related documentation pages from the website surface.
- **Download portal**: Provide download pages and server-side download redirect endpoints for client builds.
- **Search and SEO basics**: Include robots and sitemap related pages for public indexing and discoverability.

## Quick Start

### Prerequisites

- Node.js 20+
- `pnpm`

### Run locally

```bash
pnpm install
pnpm dev
```

### Production build

```bash
pnpm build
pnpm start
```

## Status

Simprint Official Website is being prepared as part of the broader Simprint open-source refactoring work.

The repository is already usable, but some content structure, documentation organization, and download workflow details are still being refined for long-term maintainability.

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

If you want to use Simprint Official Website in a way that does not comply with the AGPLv3 obligations, including distributing modified versions or providing modified versions as a closed-source service, please contact us for a commercial license.
