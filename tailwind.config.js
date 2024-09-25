/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#162d3d",
          "secondary": "#DD5852",
          "accent": "#FFE07E",
          "neutral": "#14110d",
          "neutral-content": "#5adec8",
          "base-100": "#1d282f",
          "info": "#35a0ff",
          "success": "#9be500",
          "warning": "#b14b00",
          "error": "#ff5f78",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    prefix: "",
    themeRoot: ":root",
  },
  darkMode: 'class', 
};