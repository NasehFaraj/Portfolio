/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0b0b0d",
          900: "#121217",
          800: "#181822",
          700: "#20202c",
          600: "#2a2a38"
        },
        charcoal: "#0B0D12",
        silver: {
          200: "#E6E8EC",
          300: "#C9CDD3"
        },
        nest: {
          600: "#E0234E",
          500: "#F03A62",
          400: "#F76B86",
          300: "#FF9CB1"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"]
      },
      boxShadow: {
        card: "0 24px 60px -30px rgba(8, 8, 12, 0.7)",
        glow: "0 0 0 1px rgba(224, 35, 78, 0.35), 0 18px 32px -20px rgba(224, 35, 78, 0.6)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(224, 35, 78, 0.35), transparent 45%), radial-gradient(circle at 30% 10%, rgba(240, 58, 98, 0.25), transparent 50%)",
        "section-wave":
          "radial-gradient(circle at 10% 20%, rgba(224, 35, 78, 0.18), transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 156, 177, 0.18), transparent 50%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards"
      }
    }
  },
  plugins: []
};
