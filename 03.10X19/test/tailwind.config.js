module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        personal: "#af7832",
      },
      animation: {
        "personal-animation": "line 3s linear infinite",
      },
      keyframes: {
        line: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
