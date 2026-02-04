import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Senior-friendly sizes
        "xs": ["0.875rem", { lineHeight: "1.4" }],
        "sm": ["1rem", { lineHeight: "1.5" }],
        "base": ["1.125rem", { lineHeight: "1.6" }],
        "lg": ["1.25rem", { lineHeight: "1.6" }],
        "xl": ["1.5rem", { lineHeight: "1.5" }],
        "2xl": ["1.875rem", { lineHeight: "1.4" }],
        "3xl": ["2.25rem", { lineHeight: "1.3" }],
        "4xl": ["2.75rem", { lineHeight: "1.2" }],
        "5xl": ["3.5rem", { lineHeight: "1.1" }],
        "6xl": ["4.5rem", { lineHeight: "1" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom exhibition colors
        warm: {
          50: "hsl(40 33% 97%)",
          100: "hsl(40 30% 94%)",
          200: "hsl(40 25% 88%)",
        },
        teal: {
          DEFAULT: "hsl(175 45% 28%)",
          light: "hsl(175 40% 45%)",
          dark: "hsl(175 50% 20%)",
        },
        coral: {
          DEFAULT: "hsl(15 75% 60%)",
          light: "hsl(15 70% 75%)",
          dark: "hsl(15 80% 45%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      boxShadow: {
        "warm": "0 4px 20px -2px hsl(var(--primary) / 0.1)",
        "warm-lg": "0 10px 40px -4px hsl(var(--primary) / 0.15)",
        "accent": "0 4px 20px -2px hsl(var(--accent) / 0.25)",
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
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
