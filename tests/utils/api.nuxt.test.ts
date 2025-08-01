import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchCocktails } from '@/utils/api';

describe('fetchCocktails', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});

	it('returns drinks array when response is OK', async () => {
		const mockResponse = {
			drinks: [{ idDrink: '123', strDrink: 'Margarita' }],
		};
		const fetchMock = vi.mocked(fetch);
		fetchMock.mockResolvedValue({
			ok: true,
			status: 200,
			statusText: 'OK',
			headers: new Headers(),
			json: async () => mockResponse,
		} as Response);

		const result = await fetchCocktails('margarita');
		expect(result).toEqual(mockResponse.drinks);
	});
	it('throws error when response is not ok', async () => {
		const fetchMock = vi.mocked(fetch);
		fetchMock.mockResolvedValue({
			ok: false,
			status: 200,
			statusText: 'OK',
			headers: new Headers(),
		} as Response);

		await expect(fetchCocktails('margarita')).rejects.toThrow();
	});
});
