import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atomic-design/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "port-green": "#00C16A",
        "port-blue": "#0E68F5",
        "port-yellow": "#FFEE5F",
        "port-orange": "#FD7C10",
        "port-pink": "#FD8DEF",
        "port-pink-bg": "EBA3ED",
        "port-gray": "#6B7280",
      },
    },
  },
  plugins: [],
};
export default config;
