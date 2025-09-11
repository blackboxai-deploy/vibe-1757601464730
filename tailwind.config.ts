import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// PawPointments Brand Colors
				'paw-orange': {
					50: '#FFF7F0',
					100: '#FFECD6',
					200: '#FFD4AD',
					300: '#FFB884',
					400: '#FF9B5B',
					500: '#FF914D', // Primary
					600: '#E6723A',
					700: '#CC5227',
					800: '#B33314',
					900: '#991301',
				},
				'paw-teal': {
					50: '#F0FCFB',
					100: '#D1F7F4',
					200: '#A3F0EA',
					300: '#74E8DF',
					400: '#46E1D5',
					500: '#2EC4B6', // Secondary
					600: '#25A299',
					700: '#1C7F7B',
					800: '#135D5E',
					900: '#0A3A40',
				},
				'paw-cream': {
					50: '#FFFEF9',
					100: '#FFFCF0',
					200: '#FFF9E6',
					300: '#FFF6E5', // Accent
					400: '#FFF0D4',
					500: '#FFEBC3',
					600: '#FFE3A3',
					700: '#FFDB83',
					800: '#FFD363',
					900: '#FFCB43',
				},
				'paw-gray': {
					50: '#FAFAFA',
					100: '#F5F5F5', // Background
					200: '#EEEEEE',
					300: '#E0E0E0',
					400: '#BDBDBD',
					500: '#9E9E9E',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#2E2E2E', // Text
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		}
	},
} satisfies Config;