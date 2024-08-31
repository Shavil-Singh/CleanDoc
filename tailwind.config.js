const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
        },
      },
    },
    plugins: [nextui({
        themes: {
          "dark": {
            colors: {
              background: "#001203",
              foreground: "#ffffff",
              primary: {
                50: "#E8FAF0",
                100: "#D1F4E0",
                200: "#A2E9C1",
                300: "#74DFA2",
                400: "#45D483",
                500: "#17C964",
                600: "#12A150",
                700: "#0E793C",
                800: "#095028",
                900: "#052814",
                DEFAULT: "#17C964",
                foreground: "#ffffff",
              },
              focus: "#12A150",
            },
            layout: {
              disabledOpacity: "0.3",
              radius: {
                small: "4px",
                medium: "6px",
                large: "8px",
              },
              borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
              },
            },
          },
          "light": {
            colors: {
                background: "#F7FAF7",
                primary: {
                  50: "#E8FAF0",
                  100: "#D1F4E0",
                  200: "#A2E9C1",
                  300: "#74DFA2",
                  400: "#45D483",
                  500: "#17C964",
                  600: "#12A150",
                  700: "#0E793C",
                  800: "#095028",
                  900: "#052814",
                  DEFAULT: "#17C964",
                  foreground: "#ffffff",
                },
                focus: "#12A150",
              },
            layout: {
              disabledOpacity: "0.3",
              radius: {
                small: "4px",
                medium: "6px",
                large: "8px",
              },
              borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
              },
            },
          },
        },
      }),],
  }