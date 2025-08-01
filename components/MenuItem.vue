<template>
	<NuxtLink :to="`/${code}`" class="menu-link" :class="{ active: isActive }">
		{{ code.charAt(0).toUpperCase() + code.slice(1) }}
	</NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps<{ code: string }>();
const isActive = computed(() => route.params.cocktail === props.code);
</script>

<style lang="scss" scoped>
.menu-link {
	display: block;
	padding: 6px 8px;
	text-decoration: none;
	color: $linkColor;
	border-radius: 4px;

	@media (max-width: 510px) {
		font-size: 3vw;
	}

	&:hover {
		background-color: $hover;
	}

	&.active {
		background-color: $active;
		font-weight: bold;
	}
}
</style>
