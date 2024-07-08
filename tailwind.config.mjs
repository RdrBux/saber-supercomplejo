import plugin from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary': { //#142e29
          '50': '#f3faf7',
          '100': '#d9eee6',
          '200': '#b2ddce',
          '300': '#83c5af',
          '400': '#59a891',
          '500': '#408c77',
          '600': '#31705f',
          '700': '#2a5b4f',
          '800': '#264941',
          '900': '#233e37',
          '950': '#142e29',
        },
        'secondary': { //#1dd68f
          '50': '#eafff5',
          '100': '#cdfee4',
          '200': '#a0facf',
          '300': '#63f2b6',
          '400': '#1dd68f',
          '500': '#01c882',
          '600': '#00a36b',
          '700': '#00835a',
          '800': '#006748',
          '900': '#00553c',
          '950': '#003023',
        },
        'tertiary': {
          '50': '#fbf4e6',
          '100': '#f9efdb',
          '200': '#f2ddb6',
          '300': '#eac587',
          '400': '#e1a456',
          '500': '#da8b35',
          '600': '#cb742b',
          '700': '#a95a25',
          '800': '#874825',
          '900': '#6d3c21',
          '950': '#3b1e0f',
        },
			}
		},
	},
	plugins: [],
}
