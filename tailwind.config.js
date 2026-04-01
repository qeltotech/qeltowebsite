/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        slateNight: '#0f172a',
      },
      boxShadow: {
        neon: '0 0 40px rgba(99, 102, 241, 0.35)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)',
      },
    },
  },
  plugins: [],
};
