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

        // url shortening api
        "url-shortening-api-cyan":
          "hsl(var(--url-shortening-api-cyan) / <alpha-value>)",
        "url-shortening-api-dark-violet":
          "hsl(var(--url-shortening-api-dark-violet) / <alpha-value>)",
        "url-shortening-api-red":
          "hsl(var(--url-shortening-api-red) / <alpha-value>)",
        "url-shortening-api-gray":
          "hsl(var(--url-shortening-api-gray) / <alpha-value>)",
        "url-shortening-api-grayish-violet":
          "hsl(var(--url-shortening-api-grayish-violet) / <alpha-value>)",
        "url-shortening-api-very-dark-blue":
          "hsl(var(--url-shortening-api-very-dark-blue) / <alpha-value>)",
        "url-shortening-api-very-dark-violet":
          "hsl(var(--url-shortening-api-very-dark-violet) / <alpha-value>)",

        // news homepage main
        "news-homepage-main-soft-orange":
          "hsl(var(--news-homepage-main-soft-orange) / <alpha-value>)",
        "news-homepage-main-soft-red":
          "hsl(var(--news-homepage-main-soft-red) / <alpha-value>)",
        "news-homepage-main-off-white":
          "hsl(var(--news-homepage-main-off-white) / <alpha-value>)",
        "news-homepage-main-grayish-blue":
          "hsl(var(--news-homepage-main-grayish-blue) / <alpha-value>)",
        "news-homepage-main-dark-grayish-blue":
          "hsl(var(--news-homepage-main-dark-grayish-blue) / <alpha-value>)",
        "news-homepage-main-very-dark-blue":
          "hsl(var(--news-homepage-main-very-dark-blue) / <alpha-value>)",

        // rest countries api
        "rest-countries-api-dark-blue-dark-mode-elements":
          "hsl(var(--rest-countries-api-dark-blue-dark-mode-elements) / <alpha-value>)",
        "rest-countries-api-very-dark-blue-dark-mode-background":
          "hsl(var(--rest-countries-api-very-dark-blue-dark-mode-background) / <alpha-value>)",
        "rest-countries-api-very-dark-blue-light-mode-text":
          "hsl(var(--rest-countries-api-very-dark-blue-light-mode-text) / <alpha-value>)",
        "rest-countries-api-dark-gray-light-mode-input":
          "hsl(var(--rest-countries-api-dark-gray-light-mode-input) / <alpha-value>)",
        "rest-countries-api-very-light-gray-light-mode-background":
          "hsl(var(--rest-countries-api-very-light-gray-light-mode-background) / <alpha-value>)",
        "rest-countries-api-white-dark-mode-text-light-mode-elements":
          "hsl(var(--rest-countries-api-white-dark-mode-text-light-mode-elements) / <alpha-value>)",

        // sunny agency landing page
        "sunnyside-agency-landing-page-soft-red":
          "hsl(var(--sunnyside-agency-landing-page-soft-red) / <alpha-value>)",
        "sunnyside-agency-landing-page-yellow":
          "hsl(var(--sunnyside-agency-landing-page-yellow) / <alpha-value>)",
        "sunnyside-agency-landing-page-dark-desaturated-cyan-graphic-design-text":
          "hsl(var(--sunnyside-agency-landing-page-dark-desaturated-cyan-graphic-design-text) / <alpha-value>)",
        "sunnyside-agency-landing-page-dark-blue-photography-text":
          "hsl(var(--sunnyside-agency-landing-page-dark-blue-photography-text) / <alpha-value>)",
        "sunnyside-agency-landing-page-dark-moderate-cyan-footer":
          "hsl(var(--sunnyside-agency-landing-page-dark-moderate-cyan-footer) / <alpha-value>)",
        "sunnyside-agency-landing-page-very-dark-desaturated-blue":
          "hsl(var(--sunnyside-agency-landing-page-very-dark-desaturated-blue) / <alpha-value>)",
        "sunnyside-agency-landing-page-very-dark-grayish-blue":
          "hsl(var(--sunnyside-agency-landing-page-very-dark-grayish-blue) / <alpha-value>)",
        "sunnyside-agency-landing-page-dark-grayish-blue":
          "hsl(var(--sunnyside-agency-landing-page-dark-grayish-blue) / <alpha-value>)",
        "sunnyside-agency-landing-page-grayish-blue":
          "hsl(var(--sunnyside-agency-landing-page-grayish-blue) / <alpha-value>)",
        "sunnyside-agency-landing-page-white":
          "hsl(var(--sunnyside-agency-landing-page-white) / <alpha-value>)",
      },
      fontFamily: {
        roboto: "var(--font-family-roboto)",
        "hanken-grotesk": "var(--font-family-hanken-grotesk)",
        poppins: "var(--font-family-poppins)",
        inter: "var(--font-family-inter)",
        "nunito-sans": "var(--font-family-nunito-sans)",
        barlow: "var(--font-family-barlow)",
        fraunces: "var(--font-family-fraunces)",
      },
    },
  },
  plugins: [],
};
export default config;
