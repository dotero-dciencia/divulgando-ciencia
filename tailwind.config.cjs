/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'principal-white': '#f5f5f5',
			'principal-black': '#222222',
			'light-gray': '#8a8a8a',
			'dark-gray': '#cacaca',
			'light-math': '#57abff',
			'dark-math': '#0054a8',
			'light-biology': '#74eb71',
			'dark-biology': '#008000',
			'light-geology': '#ff8f57',
			'dark-geology': '#a85800',
			'light-physics': '#ff5757',
			'dark-physics': '#a80000',
			'light-chemistry': '#ff57ff',
			'dark-chemistry': '#a800a8',
			'light-technology': '#ffc757',
			'dark-technology': '#a87000',
			'light-coding': '#c757ff',
			'dark-coding': '#5400a8',
			'light-scientifics': '#57ffe3',
			'dark-scientifics': '#00806a',
			'faded-white': 'rgb(245, 245, 245, .25)',
			'faded-black': 'rgb(34, 34, 34, .1)'
		}
	},
	plugins: [],
}
