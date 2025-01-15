module.exports = {
  darkMode: 'class', // Enables dark mode using a class
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black for primary color
        secondary: '#FFFFFF', // White for secondary color
      },
    },
  },
  plugins: [],
};
