/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Custom Phantom Protocol colors
        void: "#050505",
        cyan: "#00f0ff",
        danger: "#ff0040",
        phantom: "#8b00ff",
        smoke: "#1a1a1a",
        ash: "#2d2d2d",
        mist: "#e0e0e0",
        fog: "#888888",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        monoTech: ['Share Tech Mono', 'monospace'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        cyan: "0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(0, 240, 255, 0.2)",
        danger: "0 0 10px rgba(255, 0, 64, 0.4), 0 0 20px rgba(255, 0, 64, 0.2)",
        phantom: "0 0 10px rgba(139, 0, 255, 0.3), 0 0 20px rgba(139, 0, 255, 0.15)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 240, 255, 0.4), 0 0 10px rgba(0, 240, 255, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.4)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glitch": {
          "0%": { clipPath: "inset(40% 0 61% 0)", transform: "translate(-2px, 2px)" },
          "20%": { clipPath: "inset(92% 0 1% 0)", transform: "translate(2px, -2px)" },
          "40%": { clipPath: "inset(43% 0 1% 0)", transform: "translate(-2px, 2px)" },
          "60%": { clipPath: "inset(25% 0 58% 0)", transform: "translate(2px, -2px)" },
          "80%": { clipPath: "inset(54% 0 7% 0)", transform: "translate(-2px, 2px)" },
          "100%": { clipPath: "inset(58% 0 43% 0)", transform: "translate(2px, -2px)" },
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "shine": {
          "0%": { transform: "translateX(-100%) rotate(45deg)" },
          "100%": { transform: "translateX(100%) rotate(45deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
        "ticker": "ticker 30s linear infinite",
        "glitch": "glitch 2s infinite linear alternate-reverse",
        "blink": "blink 1s step-end infinite",
        "shine": "shine 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
