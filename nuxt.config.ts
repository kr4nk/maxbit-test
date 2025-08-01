// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/test-utils/module', '@pinia/nuxt'],
	devtools: { enabled: true },
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
		},
	},
	css: ['~/assets/styles/main.scss'],
	compatibilityDate: '2025-07-15',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/variables.scss" as *;',
				},
			},
		},
	},
	typescript: {
		typeCheck: true,
	},
});
