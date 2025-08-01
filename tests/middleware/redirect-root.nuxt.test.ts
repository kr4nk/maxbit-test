import { describe, it, expect } from 'vitest';
import redirectMiddleware from '@/middleware/redirect-root';
import type { RouteLocationNormalized } from 'vue-router';

describe('redirect-root middleware', () => {
	it('does not redirect for valid cocktail path', async () => {
		const to: RouteLocationNormalized = {
			path: '/margarita',
			fullPath: '/margarita',
			name: 'cocktail',
			meta: {},
			query: {},
			hash: '',
			params: { cocktail: 'margarita' },
			matched: [],
			redirectedFrom: undefined,
		};

		const from: RouteLocationNormalized = {
			path: '/',
			fullPath: '/',
			name: 'index',
			meta: {},
			query: {},
			hash: '',
			params: {},
			matched: [],
			redirectedFrom: undefined,
		};

		const result = await redirectMiddleware(to, from);
		expect(result).toBeUndefined();
	});
});
