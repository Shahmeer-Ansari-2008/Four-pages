import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-lg': { 'max': '952px' },
        'max-858': { 'max': '858px' }, // Use valid key name without square brackets
      }
      ,
    variants: {
      backgoundColor:['responsive','hover','focus','active'],
      fontsize:['responsive','hover','active']
    }
     },
  },
  plugins: [],
} satisfies Config;
