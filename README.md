# 🇮🇳 SchemeBot India

**Empowering Citizens Through AI-Driven Scheme Discovery**

SchemeBot India is a production-grade, multilingual AI platform designed to help Indian citizens navigate the complex landscape of government schemes. Built for the **SSIP 2.0 Ideathon 2026** by students of RNGPIT.

## ✨ Key Features
- **Multilingual AI Chat**: Chat in 22 Indian languages (Hindi, Gujarati, Tamil, etc.) powered by Llama 3.
- **Smart Discovery**: A 7-step onboarding wizard that creates a personalized profile to match you with eligible schemes.
- **Impact Dashboard**: Real-time public analytics showing benefit reach across India.
- **PWA Enabled**: Installable on mobile devices with full offline support for saved schemes.
- **Admin Portal**: Secure management system for updating scheme data and tracking trends.

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **AI**: Groq (Llama 3.1 70B)
- **Database/Analytics**: Supabase
- **Styling**: Tailwind CSS + Framer Motion
- **Visuals**: Recharts (Analytics), Lucide React (Icons)
- **PWA**: Service Workers + Web Manifest

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/your-username/schemebot-india.git
cd schemebot-india
npm install
```

### 2. Environment Variables
Create a `.env.local` file:
```env
GROQ_API_KEY=your_groq_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
ADMIN_PASSWORD=your_admin_password
```

### 3. Run Development
```bash
npm run dev
```

## 📜 License
MIT License - Developed by RNGPIT Students for SSIP 2.0.
