module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Lato: ['Lato', 'sans-serif'],
        // Prompt: ['Prompt', 'sans-serif'],
        Merriweather: ['Merriweather', 'serif'],
        //font-family: 'Akaya Telivigala', cursive;
        AkayaTelivigala: ['Akaya Telivigala', 'cursive'],
        Pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/computer-screen.png')",
      },
    },
  },
  plugins: [],
};
