/** @type {import('tailwindcss').Config} */

export default {
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'light-pink': '#FFD4E0',
            'dark-pink': '#FF5A96',
            'black': '#000000',
            'gray': '#5A5A5A',
            'white': '#FFFFFF'
        }
    },
    plugins: [],
}

