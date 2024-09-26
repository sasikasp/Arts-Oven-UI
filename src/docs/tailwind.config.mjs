import Colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'manrope': ['Manrope', 'sans-serif'],
				'mulish': ['Mulish', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif'],
			},
		},
		colors: {
			...Colors,
			'dark': '#0e0e0e',
			'card': '#141414',
			'card-light': '#1B1B1B',
			'card-soft-light': '#2A2A2A',
			'border-light': '#303030',
		}
	},
	plugins: [require('artsovenui')],
	artsovenui: {
		//
	}
}
