import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
      "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      "glow-lines":
        "linear-gradient(var(--direction),var(--glow-lines-color-start) 0.43%,var(--glow-lines-color-finish) 14.11%,rgba(120,119,198,0) 62.95%)",
      "radial-faded":
        "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
      "glass-gradient":
        "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: "0", transform: "translateY(-10px)" },
        to: { opacity: "1", transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: "0",
          "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
        },
        "10%": {
          opacity: "1",
          "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
        },
        "100%": {
          opacity: "0.2",
        },
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": "1" },
        "50%": { "stroke-dashoffset": "0" },
        "99%": { "stroke-dashoffset": "0" },
        "100%": { visiblity: "hidden" },
      },
      "glow-line-horizontal": {
        "0%": { opacity: "0", transform: "translateX(0)" },
        "5%": { opacity: "1", transform: "translateX(0)" },
        "90%": { opacity: "1" },
        "100%": { opacity: "0", transform: "translateX(min(60vw, 45rem))" },
      },
      "glow-line-vertical": {
        "0%": { opacity: "0", transform: "translateY(0)" },
        "5%": { opacity: "1", transform: "translateY(0)" },
        "90%": { opacity: "1" },
        "100%": { opacity: "0", transform: "translateY(min(21vw, 45rem))" },
      },
      zap: {
        "0%, 9%, 11%, 100% ": {
          fill: "transparent",
        },
        "10%": {
          fill: "white",
        },
      },
      bounce: {
        "50%": {
          transform: "scale(0.98)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-line-horizontal":
        "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical":
        "glow-line-vertical var(--animation-duration) ease-in forwards",
      zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
      bounce: "240ms ease 0s 1 running bounce",
    },

    extend: {
      fontFamily: {
        ia: ["iaWriterMono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "light-white": "hsl(var(--light-white))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary_hover: {
          DEFAULT: "hsl(var(--primary-hover))",
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
        transparent: "transparent",
        white: "#fff",
        "off-white": "#f7f8f8",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        grey: "#858699",
        "grey-dark": "#222326",
        "primary-text": "#b4bcd0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
