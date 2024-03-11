/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3700B3",
        secondary: "#33FF57",
        dark: "#151515",
        zDark: "#0A0A0A",
        muted: "#8c8c8c",
      },
    },
  },
  fontFamily: {
    "kode-mono": ['"Kode Mono"', "monospace"],
  },
  plugins: [],
};
