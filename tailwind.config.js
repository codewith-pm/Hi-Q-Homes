/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teak wood inspired color palette
        teak: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006'
        },
        // Enhanced amber palette
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        // Wood grain colors
        wood: {
          light: '#deb887',
          medium: '#cd853f',
          dark: '#8b4513',
          mahogany: '#c04000',
          cherry: '#de3163'
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'georgia': ['Georgia', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'wood-grain': 'woodGrain 8s ease-in-out infinite',
        'logo-shine': 'logoShine 3s infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
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
        woodGrain: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
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
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'teak-gradient': 'linear-gradient(135deg, #8b4513, #cd853f, #deb887)',
        'wood-gradient': 'linear-gradient(135deg, #92400e, #d97706, #f59e0b)',
        'luxury-wood': 'linear-gradient(135deg, #451a03, #78350f, #92400e, #d97706)',
        'wood-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"wood\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M0,10 Q5,5 10,10 T20,10\" stroke=\"%23D97706\" stroke-width=\"0.5\" fill=\"none\" opacity=\"0.2\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23wood)\"/></svg>')",
        'luxury-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"luxury\" width=\"50\" height=\"50\" patternUnits=\"userSpaceOnUse\"><path d=\"M25,5 L45,25 L25,45 L5,25 Z\" fill=\"none\" stroke=\"%23F59E0B\" stroke-width=\"1\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23luxury)\"/></svg>')",
      },
      boxShadow: {
        'teak': '0 4px 20px rgba(139, 69, 19, 0.15)',
        'teak-hover': '0 8px 30px rgba(139, 69, 19, 0.25)',
        'amber': '0 4px 20px rgba(245, 158, 11, 0.15)',
        'amber-hover': '0 8px 30px rgba(245, 158, 11, 0.25)',
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'wood': '0 8px 32px rgba(217, 119, 6, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}