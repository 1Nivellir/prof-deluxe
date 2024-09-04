export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig()
		const api = $fetch.create({
			baseURL: '/api/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})

		return {
			provide: {
				api,
			},
		}
	},
})
