/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        han: ["Black Han Sans", "sans-serif"],
        rem: ["REM", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
