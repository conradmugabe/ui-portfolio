import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // results summary colors
        "results-summary-light-red":
          "hsl(var(--results-summary-light-red) / <alpha-value>)",
        "results-summary-orangey-yellow":
          "hsl(var(--results-summary-orangey-yellow) / <alpha-value>)",
        "results-summary-Green-teal":
          "hsl(var(--results-summary-Green-teal) / <alpha-value>)",
        "results-summary-Cobalt-blue":
          "hsl(var(--results-summary-Cobalt-blue) / <alpha-value>)",
        "results-summary-light-slate-blue":
          "hsl(var(--results-summary-light-slate-blue) / <alpha-value>)",
        "results-summary-light-royal-blue":
          "hsl(var(--results-summary-light-royal-blue) / <alpha-value>)",
        "results-summary-violet-blue":
          "hsl(var(--results-summary-violet-blue) / <alpha-value>)",
        "results-summary-persian-blue":
          "hsl(var(--results-summary-persian-blue) / <alpha-value>)",
        "results-summary-pale-blue":
          "hsl(var(--results-summary-pale-blue) / <alpha-value>)",
        "results-summary-light-lavender":
          "hsl(var(--results-summary-light-lavender) / <alpha-value>)",
        "results-summary-dark-gray-blue":
          "hsl(var(--results-summary-dark-gray-blue) / <alpha-value>)",
      },
      fontFamily: {
        "hanken-grotesk": "var(--font-family-hanken-grotesk)",
      },
    },
  },
  plugins: [],
};
export default config;
