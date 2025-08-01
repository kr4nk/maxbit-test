<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCocktailStore } from '@/stores/cocktail';
import CocktailDetail from '@/components/CocktailDetail.vue';

const route = useRoute();
const store = useCocktailStore();
const code = route.params.cocktail as string;

const validCode = code as (typeof COCKTAIL_CODES)[number];

if (!COCKTAIL_CODES.includes(validCode)) {
	throw createError({ statusCode: 404 });
}

await store.loadCocktails(validCode);
</script>

<template>
	<div v-if="store.error" style="color: red">
		{{ store.error }}
	</div>
	<CocktailDetail v-else :drinks="store.data[code as string]" />
</template>
