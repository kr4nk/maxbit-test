import type { RouteLocationNormalized } from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
	if (to.path === '/') {
		return navigateTo(`/${COCKTAIL_CODES[0]}`, { redirectCode: 301 });
	}
});
