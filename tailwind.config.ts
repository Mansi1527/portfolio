import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      lg: '1rem',
      xl: '1.15rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      "6xl": '3.75rem',
      "7xl":"4rem",
      "8xl":"4.5rem",
      "9xl":"5rem",
      "10xl": '13rem',
    },
    fontFamily:{
      'basic': ["PP Neue Montreal Medium", "PP Neue Montreal Medium Placeholder", "sans-serif"],
      'baskervville': ['Baskervville', 'serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: 'rgb(218, 218, 218)',
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
