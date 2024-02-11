/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        blue: "hsl(246, 80%, 60%)",
        "light-red": "hsl(15, 100%, 70%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "light-red-study": "hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",

        // Neutral colors
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        work: "url('/icon-work.svg')",
        play: "url('/icon-play.svg')",
        study: "url('/icon-study.svg')",
        exercise: "url('/icon-exercise.svg')",
        social: "url('/icon-social.svg')",
        self: "url('/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
};
