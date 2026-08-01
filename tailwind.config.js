/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          "orange-hover": "#EA6C0A",
          "orange-light": "#FFF7ED",
          "orange-mid": "#FDBA74",
          black: "#0A0A0A",
          "black-soft": "#111111",
          "black-card": "#1A1A1A",
          brown: "#1C0A00",
          "brown-mid": "#7C3A00",
          gray: "#6B7280",
          "gray-light": "#F9FAFB",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};