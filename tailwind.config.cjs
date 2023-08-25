/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'principal-white': '#F5F5F5',
			'principal-black': '#222222',
			'light-gray': '#C3C3C3',
			'dark-gray': '#444444',
			'light-math': '#A8C6E3',
			'dark-math': '#004193',
			'light-biology': '#64DB62',
			'dark-biology': '#005100',
			'light-geology': '#E2BBA5',
			'dark-geology': '#6E3400',
			'light-physics': '#FFAAA2',
			'dark-physics': '#950000',
			'light-chemistry': '#FF99FF',
			'dark-chemistry': '#820083',
			'light-technology': '#F2BA48',
			'dark-technology': '#623B00',
			'light-coding': '#E9AAFF',
			'dark-coding': '#5A12B0',
			'light-scientifics': '#16DAC0',
			'dark-scientifics': '#004F3E',
			'faded-white': 'rgb(245, 245, 245, .25)',
			'faded-black': 'rgb(34, 34, 34, .1)'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
