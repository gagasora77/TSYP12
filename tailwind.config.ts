import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#ffffff',
        'secondary-black': '#000000',
        'light-blue': '#146FA3',
        'dark-blue': '#1B1464',
        'light-red': '#EC001D',
        'dark-red': '#94001D',
        'blue': '#00539C',
        'red': '#C60A0A',
        'blue-light': '#1380AF',
        'blue-dark': '#1A1564',
      },
      backgroundImage: {
        "selected-nav": "linear-gradient(180deg, #00539C 40%, #1B1464)",
        "font-blue": "linear-gradient(90deg, #146FA3, #1B1464)",
        "font-red": "linear-gradient(180deg, #94001D, #EC001D)",
        "story-red": "linear-gradient(180deg, #94001D 30%, #EC001D)",
        "stat-plus": "linear-gradient(180deg, #EC001D, #1B1464)",
        "about-shapes": "linear-gradient(180deg, #1380AF, #1A1564)",
      },
      dropShadow: {
        'image-shadow': '0 0 30px #ffffff',
      },
      boxShadow: {
        'title-shadow': '0px 0px 15px 0px #FF007A',
      }
    },
    fontFamily: {
      k2d: ['var(--font-k2d)'],
    }
  },
  plugins: [],
  darkMode: "class",
};
export default config;
