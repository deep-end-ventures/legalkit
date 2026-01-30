# ⚖️ LegalKit

**Generate professional legal documents for your business in minutes.**

Privacy policies, terms of service, cookie policies — customized for your business through a guided questionnaire. Download as HTML, Markdown, or PDF.

> ⚠️ **Disclaimer:** LegalKit is a template generator, not a law firm. Generated documents are templates and do not constitute legal advice. Consult a qualified attorney before using in production.

## 🚀 Live

**https://legalkit.vercel.app**

## Features

- **📝 Privacy Policy Generator** — Comprehensive policies covering data collection, usage, sharing, and user rights
- **📋 Terms of Service Generator** — Detailed terms covering liability, IP, accounts, payments, and dispute resolution
- **🍪 Cookie Policy Generator** — Policies with detailed cookie type breakdowns and management options
- **🌍 Multi-Jurisdiction** — Support for GDPR, CCPA/CPRA, PIPEDA, LGPD, and more
- **📥 Multiple Formats** — Download as HTML or Markdown
- **📊 Dashboard** — Manage and re-download your generated documents
- **⚡ Instant Generation** — Documents generated in seconds, no waiting
- **🛡️ Bulletproof Disclaimers** — Every generated document includes clear disclaimers

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Storage:** Browser localStorage (documents stay on your device)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── generate/         # Questionnaire & generation flow
│   ├── dashboard/        # Document management
│   ├── terms/            # LegalKit's own ToS
│   ├── privacy/          # LegalKit's own privacy policy
│   └── api/generate/     # Server-side generation API
├── components/           # Shared UI components
├── lib/                  # Types, disclaimers, utilities
└── templates/            # Document generation templates
    ├── privacy-policy.ts
    ├── terms-of-service.ts
    └── cookie-policy.ts
```

## Pricing

- **Free:** 1 document generation, all document types, HTML & Markdown download
- **Pro ($9/mo):** Coming soon — unlimited generation, PDF export, custom branding, AI-enhanced generation

## Legal

LegalKit is a template generator, not a law firm. Generated documents are templates and do not constitute legal advice. Always consult a qualified attorney before using any generated document for your business.

---

Built by [Deep End Ventures](https://github.com/deep-end-ventures)
