import { COCKTAILDB_API } from './constants';

export async function fetchCocktails<T>(code: string): Promise<T[]> {
	const url: string = `${COCKTAILDB_API}${code}`;
	const res: Response = await fetch(url);
	if (!res.ok) throw new Error('Network response was not ok');
	const json: { drinks: T[] | null } = await res.json();
	return json.drinks ?? [];
}
