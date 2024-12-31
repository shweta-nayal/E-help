/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#075985",
        secondary: "#0ea5e9",
        light: "#bfdbfe", /*75a4c5 */
        light2: "#dbeafe",
        light3: "#c7d2fe",
        light4: "#507FA9",
        light5: "#cadbe7",
        light6: "#7096D1",
        dark: "#333333",
        dark2: "#999999",
        dark3: "#64748b",
        dark4: "#1b4769",
        dark5: "#7293bc",
        "pastel-blue": "#d0e8f2",
        "light-blue": "#e4f1f7",
        "dark": "#2c3e50",
        navy: "#001f3f",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
