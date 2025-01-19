import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-white-20': 'rgba(255, 255, 255, 0.2)',
        'custom-white-0': 'rgba(255, 255, 255, 0)',
        'custom-purlin-100':'#FF4465',
        'custom-purlin-0':'#FFD4DC',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FF7D82 0%, #FFC1C4 100%)',
        'custom-gradient-strong': 'linear-gradient( #FF008080 0%, #F6050580 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
