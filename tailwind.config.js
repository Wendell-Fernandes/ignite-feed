/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#fff',
			'gray-100': '#e1e1e6',
			'gray-300': '#c4c4cc',
			'gray-400': '#7c7c8a',
			'gray-500': '#8d8d99',
			'gray-600': '#323238',
			'gray-700': '#29292e',
			'gray-800': '#202024',
			'gray-900': '#121214',

			green: '#00875f',
			'green-light': '#00b37e',

			red: '#f75a68'
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif']
		},
		gridTemplateColumns: {
			timeline: '16rem 1fr'
		},
		extend: {}
	},
	plugins: [require('tailwind-scrollbar')]
}
