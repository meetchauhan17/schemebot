<div align="center">

# 🇮🇳 SchemeBot India

### AI-Powered Government Scheme Discovery Platform

*Empowering every Indian citizen to find, understand, and apply for the government benefits they deserve — in their own language.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Groq](https://img.shields.io/badge/Groq-Llama_3.1_70B-F55036?style=for-the-badge)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/meetchauhan17/schemebot/pulls)

<br/>

[🚀 Live Demo](#) · [🐛 Report Bug](https://github.com/meetchauhan17/schemebot/issues) · [💡 Request Feature](https://github.com/meetchauhan17/schemebot/issues)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [The Problem We Solve](#-the-problem-we-solve)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#️-project-structure)
- [Scheme Categories](#-scheme-categories)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#️-database-setup)
- [Deployment](#-deployment)
- [API Overview](#-api-overview)
- [PWA Installation](#-pwa-installation)
- [Supported Languages](#-supported-languages)
- [Roadmap](#-roadmap)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)
- [Authors](#-authors)

---

## 📌 Overview

**SchemeBot India** is a production-grade, multilingual AI platform that bridges the gap between Indian citizens and the hundreds of government welfare schemes they are eligible for. By combining a personalized onboarding wizard with a conversational AI assistant powered by **Llama 3.1 70B**, SchemeBot delivers hyper-personalized scheme recommendations instantly — in the user's own language.

> 🏆 India has **thousands of central and state government schemes** worth ₹10+ lakh crore annually across agriculture, health, education, housing, and employment. Most citizens never access them due to lack of awareness. **SchemeBot India solves this.**

---

## 🎯 The Problem We Solve

| Challenge | SchemeBot's Solution |
|---|---|
| Citizens don't know which schemes they qualify for | Personalized 7-step onboarding matches users to eligible schemes |
| Government portals are complex and bureaucratic | Simple, conversational AI interface in regional languages |
| No single source covers all schemes | Curated database of 100+ central & state schemes |
| Language barrier for rural users | Supports all 22 scheduled Indian languages |
| Schemes have complex eligibility criteria | AI explains eligibility in plain, simple language |
| Application processes are opaque | Step-by-step guidance with document checklists |

---

## ✨ Features

### 🤖 AI Chat Assistant
- Powered by **Llama 3.1 70B** via Groq's ultra-fast inference
- Understands and responds in **22 Indian languages**
- Context-aware conversations — remembers your profile during the session
- Explains eligibility, benefits, and application processes in simple language
- Voice input support for low-literacy users

### 🧭 Smart Onboarding Wizard
- **7-step profile builder**: State → Age → Income → Occupation → Category → Gender → Interests
- Progressive form with save-and-resume support
- Instant scheme match score on completion

### 📋 Scheme Discovery Engine
- **100+ government schemes** covering central and state programs
- Advanced filtering by category, state, income group, age, and gender
- Eligibility highlights personalized to your profile
- One-click bookmarking to save schemes for later

### 📊 Impact Dashboard
- Live public analytics showing benefit reach across India
- Interactive charts: scheme distribution, category breakdown, user engagement
- Real-time counters for total beneficiaries and scheme coverage

### 📱 Progressive Web App (PWA)
- Installable on Android, iOS, and Desktop — works like a native app
- **Offline mode**: Access your saved schemes without internet
- Push notifications for new scheme announcements
- Lightweight, fast — under 100KB initial load

### 🔐 Admin Portal (`/admin`)
- Secure password-protected management dashboard
- Add, edit, and deactivate schemes
- Track platform usage trends and popular searches
- Export analytics data as CSV

### 🌙 Theme & Accessibility
- Dark / Light / System theme modes
- Fully keyboard-navigable interface
- ARIA labels and semantic HTML throughout
- WCAG 2.1 AA compliant

---

## 🔄 How It Works

```
User Opens App
      │
      ▼
┌─────────────────────┐
│  7-Step Onboarding  │  ← State, Age, Income, Occupation, Category, Gender, Interests
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  Profile Matching   │  ← Algorithm scores 100+ schemes against user profile
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐     ┌──────────────────────┐
│  Scheme Discovery   │────▶│   AI Chat Assistant  │
│  (Filtered Cards)   │     │  (Llama 3.1 70B)     │
└─────────────────────┘     └──────────────────────┘
          │
          ▼
┌─────────────────────┐
│  Apply / Save /     │  ← Official links, document checklists, step-by-step guides
│  Get Guidance       │
└─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | React framework, App Router, SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/) | 5 | End-to-end type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animations and page transitions |
| [Radix UI](https://www.radix-ui.com/) | latest | Accessible component primitives |
| [Recharts](https://recharts.org/) | 2.x | Interactive analytics charts |
| [Lucide React](https://lucide.dev/) | latest | Consistent icon library |
| [React Hook Form](https://react-hook-form.com/) | 7.x | High-performance form management |
| [Zod](https://zod.dev/) | 3.x | Schema validation |

### Backend & AI
| Technology | Purpose |
|---|---|
| [Groq SDK](https://groq.com/) | Ultra-fast Llama 3.1 70B inference for AI chat |
| [Supabase](https://supabase.com/) | PostgreSQL database, real-time & auth |
| [Next.js API Routes](https://nextjs.org/docs/app/api) | Serverless API handlers |

### Infrastructure & DevOps
| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com/) | Edge deployment, CI/CD, preview environments |
| [Vercel Analytics](https://vercel.com/analytics) | Real-time performance monitoring |
| Service Workers | PWA offline caching |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     VERCEL EDGE NETWORK                  │
│                                                         │
│  ┌─────────────┐    ┌──────────────┐   ┌─────────────┐ │
│  │  Next.js    │    │  API Routes  │   │  Static     │ │
│  │  App Router │    │  /api/chat   │   │  Assets +   │ │
│  │  (SSR/SSG)  │    │  /api/admin  │   │  PWA Cache  │ │
│  └──────┬──────┘    └──────┬───────┘   └─────────────┘ │
│         │                  │                            │
└─────────┼──────────────────┼────────────────────────────┘
          │                  │
          ▼                  ▼
┌─────────────────┐  ┌───────────────────┐
│   Supabase      │  │   Groq Cloud      │
│   PostgreSQL    │  │   Llama 3.1 70B   │
│   - Scheme data │  │   - Chat endpoint │
│   - Analytics   │  │   - Multilingual  │
│   - Sessions    │  │     NLU           │
└─────────────────┘  └───────────────────┘
```

---

## 🗂️ Project Structure

```
schemebot-india/
├── src/
│   ├── app/                        # Next.js 15 App Router
│   │   ├── (main)/                 # Public routes (layout with Header/Footer)
│   │   │   ├── page.tsx            # 🏠 Home — Scheme Discovery
│   │   │   ├── about/              # ℹ️  About page
│   │   │   ├── chat/               # 🤖 AI Chat interface
│   │   │   ├── dashboard/          # 📊 Impact analytics dashboard
│   │   │   └── profile/            # 👤 User profile & saved schemes
│   │   ├── admin/                  # 🔐 Admin portal (password protected)
│   │   ├── api/
│   │   │   ├── chat/               # POST /api/chat — Groq AI handler
│   │   │   └── analytics/          # POST /api/analytics — event tracking
│   │   ├── layout.tsx              # Root layout with theme & context providers
│   │   ├── globals.css             # Global CSS variables & base styles
│   │   ├── sitemap.ts              # Auto-generated XML sitemap
│   │   ├── error.tsx               # Global error boundary
│   │   ├── loading.tsx             # Global loading skeleton
│   │   └── not-found.tsx           # Custom 404 page
│   ├── components/
│   │   ├── chat/                   # Chat bubble, input, typing indicator
│   │   ├── dashboard/              # Charts, stat cards, analytics widgets
│   │   ├── layout/                 # Header, Footer, Navigation, MobileMenu
│   │   ├── onboarding/             # 7-step wizard with StepIndicator
│   │   │   └── steps/             # Individual step components
│   │   ├── profile/                # Profile card, saved schemes, settings
│   │   ├── schemes/                # SchemeCard, SchemeList, SchemeFilter, Skeleton
│   │   ├── shared/                 # ThemeToggle, LanguageSelector, BackButton
│   │   └── ui/                     # Radix-based: Button, Dialog, Tabs, Toast, etc.
│   ├── context/
│   │   └── ProfileContext.tsx      # Global user profile state (React Context)
│   ├── data/
│   │   ├── schemes.ts              # Core scheme database (Part 1)
│   │   ├── schemes_part2.ts        # Extended scheme database
│   │   └── schemes_part3.ts        # Additional schemes
│   ├── database/
│   │   ├── supabase.ts             # Supabase client initialization
│   │   └── schema.sql              # Database schema (run once in Supabase)
│   ├── hooks/                      # useProfile, useSchemes, useTheme, etc.
│   ├── lib/                        # cn(), formatters, scheme matchers
│   ├── styles/                     # Component-level CSS modules
│   └── types/                      # Scheme, Profile, Analytics TypeScript types
├── public/
│   ├── manifest.json               # PWA manifest (name, icons, theme)
│   ├── sw.js                       # Service Worker (caching strategy)
│   ├── robots.txt                  # SEO crawler rules
│   └── icons/                      # PWA icons (192x192, 512x512)
├── .env.local                      # 🔒 Environment variables (never committed)
├── .gitignore                      # Git ignore rules
├── next.config.ts                  # Next.js + PWA configuration
├── tailwind.config.ts              # Tailwind theme, design tokens, animations
├── tsconfig.json                   # TypeScript compiler config
├── components.json                 # shadcn/ui component registry config
├── DEPLOYMENT.md                   # Step-by-step Vercel deployment guide
└── vercel.json                     # Vercel headers, rewrites, build config
```

---

## 📂 Scheme Categories

SchemeBot India covers **100+ schemes** across these major categories:

| Category | Examples |
|---|---|
| 🌾 **Agriculture & Farming** | PM-KISAN, Pradhan Mantri Fasal Bima Yojana, Kisan Credit Card |
| 🏥 **Health & Insurance** | Ayushman Bharat, PM Jan Arogya Yojana, Janani Suraksha |
| 🏠 **Housing** | PM Awas Yojana (Urban & Rural), PMAY-G |
| 📚 **Education & Scholarships** | National Scholarship Portal, Mid-Day Meal, Samagra Shiksha |
| 💼 **Employment & Skill** | MGNREGA, PM Kaushal Vikas Yojana, Startup India |
| 👩 **Women & Child Welfare** | Beti Bachao Beti Padhao, Sukanya Samriddhi, PMMVY |
| 👴 **Senior Citizens** | National Social Assistance, Atal Pension Yojana |
| 🏭 **MSME & Business** | Mudra Yojana, Stand-Up India, GeM Portal |
| ⚡ **Energy & Environment** | PM Surya Ghar, Ujjwala Yojana, Solar Rooftop |
| 🌊 **Social Security** | PM Jeevan Jyoti, PM Suraksha Bima, E-Shram |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- A **[Groq](https://console.groq.com/)** account — free tier available, no credit card required
- A **[Supabase](https://supabase.com/)** project — free tier available

### 1. Clone the Repository

```bash
git clone https://github.com/meetchauhan17/schemebot.git
cd schemebot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local
```

Then edit `.env.local` with your credentials (see [Environment Variables](#-environment-variables)).

### 4. Initialize the Database

Run the SQL schema in your Supabase project (see [Database Setup](#️-database-setup)).

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Available Scripts

```bash
npm run dev        # Start development server (with hot reload)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint checks
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# ─────────────────────────────────────────
# Groq AI (Required)
# Get your key at https://console.groq.com/
# ─────────────────────────────────────────
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ─────────────────────────────────────────
# Supabase (Required)
# Find in: Supabase Dashboard → Settings → API
# ─────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...your_anon_key_here

# ─────────────────────────────────────────
# Admin Portal (Required)
# Set a strong password for /admin access
# ─────────────────────────────────────────
ADMIN_PASSWORD=your_strong_admin_password_here
```

> **Security Note:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

---

## 🗄️ Database Setup

SchemeBot India uses **Supabase (PostgreSQL)** for analytics and session data.

### Step-by-step

1. Create a free project at [supabase.com](https://supabase.com/)
2. Go to **SQL Editor** in your Supabase dashboard
3. Open `src/database/schema.sql` from this repository
4. Paste the SQL and click **Run**

This creates three tables:

| Table | Purpose |
|---|---|
| `scheme_views` | Tracks which schemes are viewed and by which profile type |
| `chat_sessions` | Stores anonymized chat interaction metadata |
| `analytics_events` | General event tracking for the impact dashboard |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/meetchauhan17/schemebot)

1. Click the button above or import the repo manually at [vercel.com/new](https://vercel.com/new)
2. Add your **Environment Variables** in the Vercel dashboard
3. Set **Framework Preset** to `Next.js`
4. Click **Deploy** — done in under 2 minutes!

### Manual Deployment

```bash
npm run build
npm run start
```

For detailed deployment instructions including Supabase configuration, see [DEPLOYMENT.md](DEPLOYMENT.md).

---

## 📡 API Overview

### `POST /api/chat`

Sends a user message to the Groq Llama 3.1 70B model and returns an AI response.

```json
// Request Body
{
  "message": "What schemes are available for farmers in Gujarat?",
  "profile": {
    "state": "Gujarat",
    "occupation": "farmer",
    "income": "below_1_lakh",
    "category": "general"
  },
  "history": []
}

// Response
{
  "reply": "Based on your profile, here are the top schemes available for farmers in Gujarat...",
  "language": "en"
}
```

### `POST /api/analytics`

Records an analytics event (scheme view, chat session, etc.).

```json
// Request Body
{
  "event": "scheme_view",
  "schemeId": "pm-kisan",
  "userProfile": { "state": "Gujarat", "category": "general" }
}
```

---

## 📱 PWA Installation

SchemeBot India works as a native-like app on any device:

| Platform | Instructions |
|---|---|
| **Android (Chrome)** | Open site → Tap ⋮ menu → **"Add to Home Screen"** |
| **iOS (Safari)** | Open site → Tap **Share** button → **"Add to Home Screen"** |
| **Desktop (Chrome/Edge)** | Click the **install icon** (➕) in the browser address bar |

Once installed, SchemeBot works **offline** with your saved schemes and profile.

---

## 🌐 Supported Languages

The AI assistant supports all **22 officially scheduled languages** of India:

| Language | Script | Language | Script |
|---|---|---|---|
| हिन्दी Hindi | Devanagari | বাংলা Bengali | Bengali |
| ગુજરાતી Gujarati | Gujarati | தமிழ் Tamil | Tamil |
| తెలుగు Telugu | Telugu | ಕನ್ನಡ Kannada | Kannada |
| മലയാളം Malayalam | Malayalam | ਪੰਜਾਬੀ Punjabi | Gurmukhi |
| ओड़िया Odia | Odia | অসমীয়া Assamese | Bengali |
| اردو Urdu | Perso-Arabic | संस्कृत Sanskrit | Devanagari |
| सिंधी Sindhi | Devanagari | कोंकणी Konkani | Devanagari |
| मणिपुरी Manipuri | Meitei | नेपाली Nepali | Devanagari |
| बड़ो Bodo | Devanagari | डोगरी Dogri | Devanagari |
| कश्मीरी Kashmiri | Perso-Arabic | मैथिली Maithili | Devanagari |
| संताली Santali | Ol Chiki | मराठी Marathi | Devanagari |

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Core AI chat engine with multilingual support
- [x] 7-step personalized onboarding wizard
- [x] 100+ scheme database with eligibility matching
- [x] Impact analytics dashboard
- [x] PWA with offline mode
- [x] Admin portal
- [x] Dark/Light theme

### 🚧 In Progress
- [ ] Voice input and text-to-speech output
- [ ] Scheme application status tracker
- [ ] WhatsApp Bot integration

### 🔮 Planned
- [ ] Regional state scheme APIs (live data sync)
- [ ] Aadhaar-linked eligibility verification (DigiLocker)
- [ ] Mobile app (React Native)
- [ ] Scheme expiry alerts via SMS/Email
- [ ] Community Q&A forum per scheme
- [ ] Document scanner for eligibility check

---

## ❓ FAQ

**Q: Is SchemeBot India free to use?**
> Yes, completely free for all citizens. No registration required.

**Q: Does SchemeBot store my personal data?**
> No personally identifiable information is stored. Profile data is kept locally in your browser.

**Q: Which AI model powers the chat?**
> We use **Llama 3.1 70B** (open-source) served via Groq's ultra-fast inference API — responses typically arrive in under 1 second.

**Q: Can I use SchemeBot without internet?**
> Yes! Install it as a PWA and your saved schemes and profile will be accessible offline.

**Q: How accurate is the eligibility information?**
> Scheme data is sourced from official government portals (India.gov.in, MyScheme.gov.in) and manually curated. Always verify with the official scheme portal before applying.

**Q: How do I add a new scheme to the database?**
> Add an entry to `src/data/schemes.ts` following the existing structure, or use the Admin Portal at `/admin`.

---

## 🤝 Contributing

We welcome contributions from the community! Here's how to get involved:

### Getting Started

1. **Fork** this repository by clicking the Fork button at the top
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/schemebot.git
   ```
3. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make** your changes following the existing code style
5. **Commit** with a descriptive message:
   ```bash
   git commit -m "feat: add scheme search by document type"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open** a Pull Request against the `master` branch

### Contribution Ideas
- 🌐 Add more schemes to the database (`src/data/`)
- 🌍 Improve multilingual translations
- 🐛 Fix bugs or improve existing features
- 📖 Improve documentation
- 🎨 Enhance UI/UX components
- ⚡ Performance improvements

### Code Style
- Follow existing TypeScript patterns
- Use Tailwind utility classes consistently
- Run `npm run lint` before submitting a PR

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License — Copyright (c) 2026 Meet Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

See the full [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Authors

Developed with ❤️ by [Meet Chauhan](https://github.com/meetchauhan17) and [contributors](https://github.com/meetchauhan17/schemebot/graphs/contributors).

---

<div align="center">

### 🌟 If SchemeBot India helped you or inspired you, please give it a star!

*Every star helps more developers discover this project and helps more citizens access their benefits.*

[![Star on GitHub](https://img.shields.io/github/stars/meetchauhan17/schemebot?style=social)](https://github.com/meetchauhan17/schemebot/stargazers)

<br/>

[🚀 View Live Demo](#) · [🐛 Report Bug](https://github.com/meetchauhan17/schemebot/issues) · [💡 Request Feature](https://github.com/meetchauhan17/schemebot/issues) · [📖 Documentation](DEPLOYMENT.md)

<br/>

*Made with ❤️ for 1.4 billion Indians* 🇮🇳

</div>
