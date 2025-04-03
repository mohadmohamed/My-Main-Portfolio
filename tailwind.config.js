/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF2E63',
        'neon-purple': '#9B59B6',
        'neon-blue': '#00B4D8',
        'neon-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF2E63, 0 0 10px #FF2E63, 0 0 15px #FF2E63' },
          '100%': { boxShadow: '0 0 10px #FF2E63, 0 0 20px #FF2E63, 0 0 30px #FF2E63' },
        },
      },
    },
  },
  plugins: [],
} 