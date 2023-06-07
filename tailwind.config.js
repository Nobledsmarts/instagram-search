/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6.26rem',
        '2xl': '6.25rem',
      }
    },
    extend: {
      colors : {
        "blue-darker": "var(--blue-darker)",
        "blue-hover": "var(--blue-hover)",
        "blue-color": "var(--blue-color)",
        "dark-blue": "var(--dark-blue)",
        "secondary": "var(--secondary)",
        "lightblue": "var(--lightblue)",
        "lighterblue": "var(--lighterblue)",
        "secondary-2": "var(--secondary-2)",
        "secondary-1": "var(--secondary-1)",
        "dark-blue-light": "var(--dark-blue-light)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
