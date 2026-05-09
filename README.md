<div align="center">

#  PORTFOLIO

*Professional portfolio — projects, services, and developer-focused curl endpoints.*

![Last Commit](https://img.shields.io/github/last-commit/razeevascx/portfolio?style=for-the-badge&logo=git&logoColor=D9E0EE&labelColor=1E202B&color=8ad7eb)
![Stars](https://img.shields.io/github/stars/razeevascx/portfolio?style=for-the-badge&logo=andela&logoColor=D9E0EE&labelColor=1E202B&color=86dbd7)
![Repo Size](https://img.shields.io/github/repo-size/razeevascx/portfolio?style=for-the-badge&logo=protondrive&logoColor=D9E0EE&labelColor=1E202B&color=86dbce)

**Built with:**

![Next.js](https://img.shields.io/badge/Next.js-1E202B?style=for-the-badge&logo=nextdotjs&logoColor=ffffff)
![React](https://img.shields.io/badge/React-1E202B?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-1E202B?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-1E202B?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)

</div>

## Project Overview

Personal portfolio website showcasing projects, services, and developer-focused terminal endpoints. Built for engineers and recruiters who want a fast, accessible, and modern presentation of work with both a polished web UI and curl-friendly text endpoints.

## Features

- **Terminal-friendly endpoints** — Plain-text `/txt` routes for quick terminal access and demos
- **Modern stack** — Next.js App Router, React 19, and TypeScript for strong DX and performance
- **MDX content** — Easily author rich project pages with MDX and Sugar High syntax highlighting
- **Responsive & animated** — Tailwind CSS + Motion animations for a polished UI
- **Developer-first tooling** — Turbopack for fast HMR, ESLint and TypeScript for quality

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4, PostCSS
- **Content:** MDX, next-mdx-remote-client, Sugar High
- **Animation:** Motion (Framer Motion successor)
- **Tooling:** Turbopack, ESLint, pnpm
- **Hosting:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ (use latest LTS)
- bun(uses `bun` as package manager)

### Quick Start

1. Clone the repo

```bash
git clone https://github.com/razeevascx/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
buninstall
```

3. Start development

```bash
bundev
```

4. Open the site

```text
http://localhost:3000
```

5. Try the curl endpoints

```bash
curl http://localhost:3000
curl http://localhost:3000/projects
curl http://localhost:3000/contact
```

### Build & Preview

```bash
bunbuild
```

## Scripts

- `bundev` — start dev server (Turbopack)
- `bunbuild` — build production
- `bunstart` — run production server
- `bunlint` — run ESLint
- `bunfavicons` — generate favicons (project-specific script)

## Links & Support

- **Homepage:** https://rajeevpuri.com.np
- **Repository:** https://github.com/razeevascx/portfolio
- **Issues:** https://github.com/razeevascx/portfolio/issues
