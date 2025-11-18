import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gmail: {
          red: "#EA4335",
          blue: "#4285F4",
          yellow: "#FBBC04",
          green: "#34A853",
        },
      },
    },
  },
  plugins: [],
};
export default nextConfig;
