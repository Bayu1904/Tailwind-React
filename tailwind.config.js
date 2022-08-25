/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "110%",
        16: "4rem",
      },
      height: {
        conten: "35rem",
      },
      margin: {
        pages: "46rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
