/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2C6E',
          dark: '#071D4A',
          darker: '#050F2E',
          light: '#1E4A9E',
        },
        gold: {
          DEFAULT: '#C9962B',
          light: '#E8B94D',
          soft: '#F2D488',
        },
        ice: '#EAF1FB',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'navy-radial':
          'radial-gradient(circle at 20% 20%, rgba(30,74,158,0.55), transparent 45%), radial-gradient(circle at 80% 30%, rgba(201,150,43,0.35), transparent 40%), radial-gradient(circle at 50% 90%, rgba(30,74,158,0.4), transparent 45%)',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(60px, -40px) scale(1.15)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 50px) scale(1.1)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, 60px) scale(0.9)' },
        },
        drift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float1: 'float1 14s ease-in-out infinite',
        float2: 'float2 18s ease-in-out infinite',
        float3: 'float3 16s ease-in-out infinite',
        drift: 'drift 30s linear infinite alternate',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
