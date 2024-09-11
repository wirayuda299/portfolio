/** @type {import('tailwindcss').Config} */

import './types/tailwindcss-animated.ts'
const { withUt } = require("uploadthing/tw");

module.exports = withUt({
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
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
        'sm1': '517px',
        'md2': '850px'
      },
      colors: {
        'primary-light': '#0252CD',
        'primary-dark': '#1160f9',
        'light-gray': '#ffffff33',
        'secondary': '#FFBE62',
        'white-800': '#F3F8FF',
        'white-500': '#475569',
        'white-100': '#ececec',
        'black-100': '#00000014',
        'black-200': '#151E2C',
        'black-300': '#192333',
        'black-400': '#778295',
        'light-blue': '#1F2E48',
        'light-shadow': '#1F2C41',
        'tomato': '#E15A46',
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
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        'fade-right': {
          from: {
            opacity: 0,
            transform: 'translateX(-50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          },
        },
        'fade-left': {
          from: {
            opacity: 0,
            transform: 'translateX(50px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          },
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
        "fade-in": "fade-in 500ms ease-in forwards",
        "fade-up": "fade-up 400ms ease forwards ",
        "fade-left": "fade-left 500ms ease forwards",
        "fade-right": "fade-right 500ms ease forwards",
        "increasing": "increasing 500ms forwards",
        "icon-up": "icon-up 0.5s linear",
      },

      maxWidth: {
        150: '150px',
        200: '200px',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        650: '650px',
        700: '700px',
        880: '880px',
        1400: '1400px'
      },
      width: {
        53: '53px'
      },
      height: {
        53: '53px'
      },
      minHeight: {
        300: '300px',
        400: '400px',
        500: '500px',
      },
      minWidth: {
        150: '150px',
        200: '200px',
        250: '250px',
        280: '280px',
        300: '300px'
      },
      maxHeight: {
        400: '400px',
        450: '450px',
        530: '530px',
        500: '500px',
        600: '600px',
        700: '700px',
        750: '750px',
      },
      fontSize: {
        16: '64px',
        10: '10px'
      },
      boxShadow: {
        'card': '32px 32px 71px 0px #428DFF'
      }
    },

  },
  plugins: [require("tailwindcss-animate")],
})
