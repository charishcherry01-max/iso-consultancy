import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        border: "rgba(255, 255, 255, 0.12)",
        input: "rgba(255, 255, 255, 0.12)",
        ring: "#60A5FA",
        background: "#081120",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#60A5FA",
          foreground: "#081120",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          foreground: "#94a3b8",
        },
        popover: {
          DEFAULT: "rgba(8, 17, 32, 0.9)",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "24px",
        md: "calc(24px - 2px)",
        sm: "calc(24px - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
