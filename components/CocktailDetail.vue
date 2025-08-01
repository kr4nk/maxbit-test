<template>
	<div
		v-for="drink in props.drinks"
		:key="drink.idDrink"
		class="cocktail-block"
	>
		<div class="cocktail-info">
			<h2>{{ drink.strDrink }}</h2>
			<p>
				{{ drink.strCategory }} | {{ drink.strAlcoholic }} |
				{{ drink.strGlass }}
			</p>
			<p><strong>Instructions:</strong> {{ drink.strInstructions }}</p>

			<p><strong>List of ingredients:</strong></p>
			<ul>
				<li v-for="(ing, i) in ingredients(drink)" :key="i">
					{{ ing.measure }} {{ ing.ingredient }}
				</li>
			</ul>
		</div>
		<img
			class="cocktail-thumb"
			:src="drink.strDrinkThumb"
			:alt="drink.strDrink"
			loading="lazy"
		/>
	</div>
</template>

<script setup lang="ts">
import type { Cocktail } from '@/types/cocktail';

const props = defineProps<{ drinks: Cocktail[] }>();

function ingredients(drink: Cocktail) {
	const result = [];
	for (let i = 1; i <= 15; i++) {
		const ingredient = drink[`strIngredient${i}`];
		const measure = drink[`strMeasure${i}`];
		if (ingredient) result.push({ measure: measure || '', ingredient });
	}
	return result;
}
</script>

<style lang="scss" scoped>
.cocktail-block {
	margin-bottom: 16px;
	display: flex;
	// flex-direction: column;
	gap: 16px;
	flex-direction: row;
	padding-bottom: 16px;
	border-bottom: 1px solid $gray;

	@media (max-width: 640px) {
		font-size: 2.5vw;
	}
}
.cocktail-block:last-child {
	border-bottom: none;
}

.cocktail-info {
	flex: 1;
}

.cocktail-thumb {
	border: 1px solid $gray;
	border-radius: 4px;
	object-fit: contain;
	width: 45%;
	height: 100%;
}
</style>
