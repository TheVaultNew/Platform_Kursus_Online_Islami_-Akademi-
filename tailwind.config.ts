import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#0F2C23',
          900: '#1B4D3E', // Deep Emerald (Primary)
          850: '#154134',
          800: '#236350',
          700: '#2E7D65',
          600: '#3D9E82',
          100: '#E2F0EB',
          50: '#F2F8F5',
        },
        cream: {
          50: '#FCFAF6',
          100: '#F7F1E3', // Cream (Base Background)
          200: '#EFE3CA',
          300: '#E4D2AE',
          400: '#D5BC8C',
        },
        gold: {
          300: '#E8D47E',
          400: '#DFC364',
          500: '#C9A227', // Gold (Accent)
          600: '#B08C1E',
          700: '#8E7014',
        },
        navy: {
          950: '#121929',
          900: '#1F2A44', // Navy
          800: '#2D3C61',
          700: '#3C4F7F',
        },
        charcoal: {
          950: '#1E1B18',
          900: '#2B2723', // Charcoal (Body Text)
          800: '#433D37',
          700: '#5F574E',
          600: '#7E756B',
          500: '#9F968B',
          400: '#C2BBB2',
        }
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      backgroundImage: {
        'islamic-pattern': "radial-gradient(#C9A227 0.75px, transparent 0.75px), radial-gradient(#C9A227 0.75px, #1B4D3E 0.75px)",
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(43, 39, 35, 0.05)',
        'card': '0 10px 30px -5px rgba(27, 77, 62, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(27, 77, 62, 0.16)',
        'gold-glow': '0 0 25px rgba(201, 162, 39, 0.35)',
      }
    },
  },
  plugins: [],
} satisfies Config
