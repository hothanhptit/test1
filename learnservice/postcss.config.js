module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgba(249, 230, 233, 0.8)",
          base: "#C00027",
          disable: "rgba(192, 0, 39, 0.5)",
        },
        secondary: {
          orange: "#FFC9AD",
          purple: "#D4C9FF",
          blue: "#BAEAFF",
          green: "#C2EED6",
          yellow: "#FFE1A6",
          red: "#FF9090",
        },
        status: {
          progress: "#2A85FF",
          success: "#3C9F19",
          error: "#E53A22",
          warning: "#E48900",
        },
        grey: {
          100: "#FFFFFF",
          200: "#FCFCFD",
          300: "#F4F5F6",
          400: "#E6E8EC",
          500: "#B1B5C3",
          600: "#777E91",
          700: "#353945",
          800: "#23262F",
          900: "#141414",
        },
      },
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
        "fade-in-forward":
          "fade-in-forward 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      keyframes: {
        enter: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        leave: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-forward": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0px)",
            opacity: "1",
          },
        },
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      sans: ["Bruno Ace, cursive"],
    },
  },
  plugins: [],
};
