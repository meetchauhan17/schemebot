import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SchemeBot India — Find Government Schemes in Your Language",
    template: "%s | SchemeBot India",
  },
  description:
    "AI-powered chatbot to find Indian government schemes you qualify for. Works in 22 languages including Hindi, Gujarati, Tamil, Telugu and more. Free forever.",
  keywords: ["government schemes", "sarkari yojana", "PM schemes", "benefits", "India", "free schemes"],
  authors: [{ name: "SchemeBot Team" }],
  openGraph: {
    title: "SchemeBot India — AI Government Scheme Guide",
    description: "Find 150+ government schemes in your language. Free, no login needed.",
    url: "https://schemebot-india.vercel.app",
    siteName: "SchemeBot India",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SchemeBot India",
  },
};

export const viewport: Viewport = {
  themeColor: "#e0e5ec",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { ProfileProvider } from "@/context/ProfileContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-dvh bg-[#e0e5ec] font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ProfileProvider>
              {children}
            </ProfileProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                })
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
