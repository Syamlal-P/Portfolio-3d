/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        bg: "#0a0a0f",
        card: "#111827",
        textSecondary: "#9ca3af",
        border: "#1f2937",
        badge: "#1e293b",
        badgeText: "#94a3b8",
      },
      fontFamily: {
  poppins: ["Poppins", "sans-serif"],
  display: ["Outfit", "sans-serif"],
},
    },
  },
  plugins: [
  require('tailwind-scrollbar')
],
};