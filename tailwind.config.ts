/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grave: {
          bg: "#0a0a0f",
          card: "#12121a",
          border: "#2a2a3a",
          green: "#00ff88",
          purple: "#9b59ff",
          gray: "#6b7280",
          white: "#e8e8f0",
        }
      },
      fontFamily: {
        heading: ["'Cinzel'", "serif"],
        body: ["'IBM Plex Mono'", "monospace"],
      },
      animation: {
        flicker: "flicker 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
}