import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Surfaces */
        background:  "var(--surface-page)",
        panel:       "var(--surface-panel)",
        recessed:    "var(--surface-recessed)",
        chassis:     "var(--surface-page)",
        hardware:    "var(--surface-dark)",

        /* Text */
        foreground:  "var(--text-primary)",
        secondary:   "var(--text-secondary)",
        muted:       "var(--text-muted)",

        /* Accent / Status */
        accent: {
          DEFAULT:   "var(--color-accent)",
          dark:      "var(--color-accent-dark)",
          foreground:"#ffffff",
        },
        success:     "var(--color-success)",
        danger:      "var(--color-danger)",
        warning:     "var(--color-warning)",

        /* Aliases for shadcn compat */
        card: {
          DEFAULT:   "var(--surface-page)",
          foreground:"var(--text-primary)",
        },
        primary: {
          DEFAULT:   "var(--color-accent)",
          foreground:"#ffffff",
        },
        destructive: {
          DEFAULT:   "var(--color-danger)",
          foreground:"#ffffff",
        },
        border:      "var(--shadow-dark)",
        input:       "var(--surface-recessed)",
        ring:        "var(--color-accent)",
      },

      boxShadow: {
        /* Physical shadow system */
        "card":      "var(--shadow-card)",
        "floating":  "var(--shadow-floating)",
        "pressed":   "var(--shadow-pressed)",
        "recessed":  "var(--shadow-recessed)",
        "sharp":     "var(--shadow-sharp)",

        /* Glow states */
        "glow":      "var(--shadow-glow-accent)",
        "glow-green":"var(--shadow-glow-green)",
        "glow-amber":"var(--shadow-glow-amber)",

        /* Legacy aliases kept for compatibility */
        "neu-flat":       "var(--shadow-card)",
        "neu-inset":      "var(--shadow-recessed)",
        "neu-inset-deep": "var(--shadow-pressed)",
        "neu-inset-small":"var(--shadow-recessed)",
        "neu-hover":      "var(--shadow-floating)",
        "neu-lifted":     "var(--shadow-floating)",
        "neu-small":      "var(--shadow-sharp)",
      },

      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "'JetBrains Mono'", "monospace"],
        display: ["var(--font-inter)", "Inter", "sans-serif"],
        indic:   ["var(--font-noto-sans)", "'Noto Sans'", "sans-serif"],
      },

      borderRadius: {
        sm:  "4px",
        md:  "8px",
        lg:  "16px",
        xl:  "24px",
        "2xl": "32px",
      },

      keyframes: {
        "led-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 8px 2px rgba(34, 197, 94, 0.7)" },
          "50%":      { opacity: "0.6", boxShadow: "0 0 4px 1px rgba(34, 197, 94, 0.4)" },
        },
        "led-red-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 8px 2px rgba(255, 71, 87, 0.7)" },
          "50%":      { opacity: "0.6", boxShadow: "0 0 4px 1px rgba(255, 71, 87, 0.4)" },
        },
      },
      animation: {
        "led-pulse":     "led-pulse 2s ease-in-out infinite",
        "led-red-pulse": "led-red-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
