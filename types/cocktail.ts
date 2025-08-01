export interface Cocktail {
	idDrink: string;
	strDrink: string;
	strInstructions: string;
	strDrinkThumb: string;
	strGlass: string;
	strCategory: string;
	strAlcoholic: string;
	strIngredient1: string | null;
	strMeasure1: string | null;
	[key: string]: string | null;
}
