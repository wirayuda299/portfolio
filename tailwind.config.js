/** @type {import('tailwindcss').Config} */

import './types/tailwindcss-animated.d.ts'

const { withUt } = require("uploadthing/tw");
module.exports = withUt({
  darkMode: "class",
  content: [
    './public/assets/icons/**/*.svg',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'md1': '780px',
        'sm1': '517px',
        'md2': '850px'
      },
      colors: {
        'primary-light': '#0252CD',
        'primary-dark': '#428DFF',
        'secondary': '#FFBE62',
        'white-800': '#F3F8FF',
        'white-500': '#475569',
        'white-100': '#ececec',
        'black-100': '#00000014',
        'black-200': '#151E2C',
        'black-300': '#192333',
        'black-400': '#778295',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'increasing': {
          from: { width: 0 },
          to: { width: '100%' }
        },

        'icon-up': {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': { transform: 'translateY(0)' }
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-in forwards",
        "increasing": "increasing 1s forwards",
        "icon-up": "icon-up 0.5s linear",
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 180deg at 50% 75.56%, #0252CD 0deg, rgba(2, 82, 205, 0.33) 360deg);'
      },
      maxWidth: {
        600: '600px',
        1400: '1400px'
      },
      fontSize: {
        16: '64px'
      }
    },

  },
  plugins: [require("tailwindcss-animate"), require('tailwindcss-animated')],
})
