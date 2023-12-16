
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8fdff",
          300: "#d5d9f2",
          400: "#c9c9c9",
          500: "#9b9b9b",
          600: "#81666f",
          700: "#606060",
          800: "#6a3416",
          "50_01": "#f9f9f9",
          "50_02": "#f7fbff",
          "600_02": "#8b5d6c",
          "600_01": "#905f6f",
        },
        deep_orange: { 300: "#ff9f6a", A100: "#ff9f6b" },
        pink: { 800: "#a7464f", 900: "#90415b", "800_01": "#a94b53" },
        light_blue: {
          100: "#aadaf1",
          A700: "#0073ff",
          A700_03: "#007ef3",
          A700_42: "#007ef342",
          A700_02: "#007df2",
          A700_01: "#007ff4",
        },
        red: { 400: "#b5545c", A100: "#f77f89" },
        teal: { 100: "#aed3e2", 900: "#002348" },
        black: { 900: "#000000" },
        indigo: {
          50: "#d6e0f4",
          100: "#b8c9ea",
          200: "#8face0",
          900: "#003b79",
          "900_12": "#003b7912",
        },
        blue_gray: {
          300: "#73a9c3",
          400: "#737999",
          500: "#667c94",
          800: "#3b4161",
          900: "#353823",
        },
        blue: { 50: "#ebeeff", 300: "#55adff", "50_01": "#ecf4ff" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "0px 10px  50px 25px #007ef342",
        bs: "0px 10px  50px 25px #003b7912",
        bs2: "0px 10px  50px 12.5px #003b7912",
      },
      fontFamily: {

        sourcesanspro: "Source Sans Pro",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [],
};
