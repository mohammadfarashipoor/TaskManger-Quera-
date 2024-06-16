/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-l": "32px",
        "heading-m": "28px",
        "heading-s": "24px",
        "heading-xs": "20px",

        "body-xl": "24px",
        "body-l": "20px",
        "body-m": "16px",
        "body-s": "14px",
        "body-xs": "12px",

        "bold-xl": "24px",
        "bold-l": "20px",
        "bold-m": "16px",
        "bold-s": "14px",
        "bold-xs": "12px",
      },
      spacing: {
        xs: "8px",
        s: "16px",
        m: "24px",
        l: "32px",
        xl: "40px",
      },
      colors: {
        gray: {
          primary: "#868E96",
          secondary: "#F1F3F5",
          darker: "#343A40",
          light: "#AAAAAA",
        },
        red: {
          primary: "#FA5252",
          secondary: "#FFE3E3",
        },
        pink: {
          primary: "#E64980",
          secondary: "#FFDEEB",
        },
        grape: {
          primary: "#BE4BDB",
          secondary: "#F3D9FA",
        },
        violet: {
          primary: "#7950F2",
          secondary: "#E5DBFF",
        },
        indigo: {
          primary: "#4C6EF5",
          secondary: "#DBE4FF",
        },
        blue: {
          primary: "#228BE6",
          secondary: "#D0EBFF",
        },
        cyan: {
          primary: "#15AABF",
          secondary: "#C5F6FA",
        },
        teal: {
          primary: "#12B886",
          secondary: "#C3FAE8",
        },
        brand: {
          primary: "#208D8E",
          secondary: "#C2F7FA",
        },
        green: {
          primary: "#40C057",
          secondary: "#D3F9D8",
        },
        lime: {
          primary: "#82C91E",
          secondary: "#E9FAC8",
        },
        yellow: {
          primary: "#FAB005",
          secondary: "#FFF3BF",
        },
        orange: {
          primary: "#FD7E14",
          secondary: "#FFE8CC",
        },
      },
    },
  },
  plugins: [],
};
