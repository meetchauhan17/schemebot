<div align="center">

# 🇮🇳 SchemeBot India

### AI-Powered Government Scheme Discovery Platform

*Empowering every Indian citizen to find, understand, and apply for the government benefits they deserve.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Groq](https://img.shields.io/badge/Groq-Llama_3.1_70B-orange?style=for-the-badge)](https://groq.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**Built for SSIP 2.0 Ideathon 2026 · RNGPIT**

</div>

---

## 📌 Overview

**SchemeBot India** is a production-grade, multilingual AI platform that bridges the gap between Indian citizens and the hundreds of government welfare schemes they may be eligible for. By combining a personalized onboarding wizard with a conversational AI assistant, SchemeBot delivers scheme recommendations instantly — in the user's own language.

India has **thousands of central and state government schemes** across agriculture, health, education, housing, and employment. Most citizens never access them due to lack of awareness or navigational complexity. SchemeBot India solves this.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **Multilingual AI Chat** | Converse in 22 Indian languages (Hindi, Gujarati, Tamil, Bengali, and more) powered by Llama 3.1 70B via Groq |
| 🧭 **Smart Onboarding Wizard** | 7-step profile builder — state, age, income, occupation, category, gender, and interests — for hyper-personalized matches |
| 📋 **Scheme Discovery Engine** | Browse and filter 100+ central & state government schemes with eligibility highlights |
| 📊 **Impact Dashboard** | Live public analytics showing benefit reach, scheme distribution, and user trends across India |
| 📱 **Progressive Web App (PWA)** | Installable on Android/iOS with offline support for saved schemes and cached data |
| 🔐 **Admin Portal** | Secure password-protected management dashboard to add/update schemes and monitor platform usage |
| 🌙 **Dark / Light Mode** | System-aware theme switching for comfortable usage at any time of day |
| ♿ **Accessible Design** | Built with semantic HTML, ARIA labels, and keyboard navigation support |

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** — React framework with App Router, Server Components & SSR
- **[TypeScript 5](https://www.typescriptlang.org/)** — End-to-end type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Smooth animations and transitions
- **[Radix UI](https://www.radix-ui.com/)** — Accessible, unstyled component primitives
- **[Lucide React](https://lucide.dev/)** — Crisp, consistent icon set
- **[Recharts](https://recharts.org/)** — Interactive analytics charts

### Backend & Data
- **[Groq SDK](https://groq.com/)** — Ultra-fast inference for Llama 3.1 70B (AI chat engine)
- **[Supabase](https://supabase.com/)** — PostgreSQL database, real-time subscriptions & auth
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** — Serverless API handlers

### Infrastructure
- **[Vercel](https://vercel.com/)** — Edge deployment with zero-config CI/CD
- **Service Workers** — PWA offline caching strategy
- **[Vercel Analytics](https://vercel.com/analytics)** — Real-time performance monitoring

---

## 🗂️ Project Structure

```
schemebot-india/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (main)/                 # Public-facing pages
│   │   │   ├── page.tsx            # Home / Scheme Discovery
│   │   │   ├── about/              # About page
│   │   │   ├── chat/               # AI Chat interface
│   │   │   ├── dashboard/          # Impact analytics dashboard
│   │   │   └── profile/            # User profile & saved schemes
│   │   ├── admin/                  # Admin portal (password protected)
│   │   ├── api/                    # API Route handlers
│   │   ├── layout.tsx              # Root layout with providers
│   │   └── globals.css             # Global styles & CSS variables
│   ├── components/
│   │   ├── chat/                   # AI chat UI components
│   │   ├── dashboard/              # Analytics & chart components
│   │   ├── layout/                 # Header, Footer, Navigation
│   │   ├── onboarding/             # 7-step onboarding wizard
│   │   ├── profile/                # Profile management UI
│   │   ├── schemes/                # Scheme cards, filters, lists
│   │   ├── shared/                 # Reusable shared components
│   │   └── ui/                     # Base UI primitives (Radix-based)
│   ├── context/                    # React Context providers
│   ├── data/                       # Static scheme data (100+ schemes)
│   ├── database/                   # Supabase client & DB utilities
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions & helpers
│   └── types/                      # Shared TypeScript type definitions
├── public/
│   ├── manifest.json               # PWA manifest
│   ├── sw.js                       # Service Worker
│   └── robots.txt                  # SEO robots config
├── .env.local                      # Environment variables (not committed)
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind theme & design tokens
└── vercel.json                     # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A **[Groq](https://console.groq.com/)** account (free tier available)
- A **[Supabase](https://supabase.com/)** project

### 1. Clone the Repository

```bash
git clone https://github.com/meetchauhan17/schemebot.git
cd schemebot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Groq AI — Get your key at https://console.groq.com/
GROQ_API_KEY=your_groq_api_key_here

# Supabase — Get these from your Supabase project settings
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Admin Portal — Choose a strong password
ADMIN_PASSWORD=your_secure_admin_password
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 🗄️ Database Setup

SchemeBot India uses **Supabase (PostgreSQL)** for storing user analytics and scheme interaction data.

1. Create a new project at [supabase.com](https://supabase.com/)
2. Copy your **Project URL** and **Anon Key** from **Project Settings → API**
3. Paste them into your `.env.local` file
4. The app will auto-initialize required tables on first run

---

## 📱 PWA Installation

SchemeBot India is a fully installable Progressive Web App:

- **Android**: Open in Chrome → tap the browser menu → **"Add to Home Screen"**
- **iOS**: Open in Safari → tap the Share button → **"Add to Home Screen"**
- **Desktop**: Click the install icon in the browser address bar

---

## 🌐 Supported Languages

The AI assistant can understand and respond in:

`Hindi` · `Gujarati` · `Tamil` · `Telugu` · `Marathi` · `Bengali` · `Kannada` · `Malayalam` · `Odia` · `Punjabi` · `Assamese` · `Urdu` · `Sanskrit` · `Sindhi` · `Konkani` · `Manipuri` · `Nepali` · `Bodo` · `Dogri` · `Kashmiri` · `Maithili` · `Santali`

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create** a new branch: `git checkout -b feature/your-feature-name`
3. **Make** your changes and commit: `git commit -m "feat: add your feature"`
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

Please follow the existing code style and include relevant tests where applicable.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Authors

Developed with ❤️ by students of **RNGPIT** for the **SSIP 2.0 Ideathon 2026**.

---

<div align="center">

**⭐ If SchemeBot India helped you or inspired you, please star this repository!**

[Report Bug](https://github.com/meetchauhan17/schemebot/issues) · [Request Feature](https://github.com/meetchauhan17/schemebot/issues) · [View Live Demo](https://github.com/meetchauhan17/schemebot)

</div>
