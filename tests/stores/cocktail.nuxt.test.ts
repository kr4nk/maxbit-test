import { beforeEach, describe, expect, it, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCocktailStore } from '@/stores/cocktail';
import * as api from '@/utils/api';
import { mockDrink } from '../mockData';

describe('CocktailStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('loads cocktail data from API and stores it', async () => {
		vi.spyOn(api, 'fetchCocktails').mockResolvedValue([mockDrink]);

		const store = useCocktailStore();
		await store.loadCocktails('margarita');

		expect(store.data.margarita).toEqual([mockDrink]);
	});
});
