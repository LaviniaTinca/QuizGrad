// export default {
//   content: ["./src/**/*.{html,js}", "./app/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         sm: "768px",
//         lg: "1024px",
//         xl: "1440px",
//       },
//     },
//   },
//   plugins: [require("tailwind-merge")],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
