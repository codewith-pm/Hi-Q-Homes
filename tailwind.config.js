/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f9d2d7',
          300: '#f4adb6',
          400: '#ec7d8a',
          500: '#e04f63',
          600: '#cc2f4a',
          700: '#ab233d',
          800: '#8f1f38',
          900: '#722f37',
          950: '#4a1c2a'
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12'
        },
        cream: {
          50: '#fefefe',
          100: '#fdf8f5',
          200: '#f5f1ed',
          300: '#ede5dc',
          400: '#e5d5c8',
          500: '#d4c4b0',
          600: '#b8a082',
          700: '#9c7c54',
          800: '#7d5e3f',
          900: '#6b4423'
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'georgia': ['Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'wine-flow': 'wineFlow 2s ease-in-out infinite',
        'logo-shine': 'logoShine 3s infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        wineFlow: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' }
        },
        logoShine: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '50%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
          '100%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'wine-gradient': 'linear-gradient(135deg, #4a1c2a, #722f37, #8f1f38)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37, #facc15)',
        'luxury-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"luxury\" width=\"50\" height=\"50\" patternUnits=\"userSpaceOnUse\"><path d=\"M25,5 L45,25 L25,45 L5,25 Z\" fill=\"none\" stroke=\"%23D4AF37\" stroke-width=\"1\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23luxury)\"/></svg>')",
      },
      boxShadow: {
        'wine': '0 4px 20px rgba(114, 47, 55, 0.15)',
        'wine-hover': '0 8px 30px rgba(114, 47, 55, 0.25)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}