// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	devtools: { enabled: true },
	ssr: false,
	css: ['@/assets/scss/main.scss'],
	routeRules: {
		'/api/**': { proxy: 'https://tot-market.ru/**' },
	},
	alias: {
		'@assets': '/src/assets',
		'@images': '/src/assets/images',
		'@components': '/src/components',
	},
	image: {
		UploadcareModifiers: {
			format: ['avif', 'webp', 'jpeg'],
			quality: 95,
		},
		none: {},
	},
	modules: [
		'@pinia/nuxt',
		'@nuxt/image',
		'@primevue/nuxt-module',
		[
			'nuxt-viewport',
			{
				breakpoints: {
					desktopMedium: 1200,
					tabletMedium: 960,
					tablet: 640,
					mobileMedium: 480,
					mobile: 320,
				},
			},
		],
		'nuxt-marquee',
	],

	primevue: {
		usePrimeVue: true,
		components: {
			prefix: 'Prime',
			include: ['InputMask', 'DataTable', 'Column'],
		},
		directives: {
			prefix: 'prime',
			// include: ['Tooltip'],
		},
		options: {
			unstyled: true,
		},
	},
})
