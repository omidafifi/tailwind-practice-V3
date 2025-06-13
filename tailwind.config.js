module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        savate: ["Savate", "sans-serif"], // ← این خط باید با ویرگول تمام بشه
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
