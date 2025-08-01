import { defineStore } from 'pinia';
import { fetchCocktails } from '@/utils/api';
import type { Cocktail } from '@/types/cocktail';

export const useCocktailStore = defineStore('cocktail', {
	state: () => ({
		data: {} as Record<string, Cocktail[]>,
		error: null as string | null,
	}),
	actions: {
		async loadCocktails<T extends Cocktail>(code: string) {
			if (this.data[code]) return;
			try {
				const result = await fetchCocktails<T>(code);
				this.data[code] = result;
			} catch (e) {
				this.error = `Ошибка при загрузке: ${String(e)}`;
			}
		},
	},
});
