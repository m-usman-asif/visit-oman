import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CircularStd:["var(--font-circularStd)"],
        Montserrat:["var(--font-montserrat)"],
        GeLight:["var(--font-ge-light)"],
        GeMedium:["var(--font-ge-medium)"],
        GeBold:["var(--font-ge-bold)"],
      },
      colors: {
        primary:"var(--primary)",
        primaryLight:"var(--primaryLight)",
        secondary:"var(--secondary)",
        mapBg:"var(--mapBg)",
        footerBg:"var(--footerBg)",
        navBg:"var(--navBg)",
        heading:"var(--heading)",
        bodyText:"var(--body-text)",
        mapBgLight:"var(--mapBgLight)",
        homeBannerBg: "var(--homeBannerBg)",
        dropdownBg:"var(--dropDownBg)",
        borderGrey:"var(--borderColor)"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '479px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
export default config;