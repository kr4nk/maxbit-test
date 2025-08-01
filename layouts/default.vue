<template>
	<div class="layout">
		<aside class="sidebar">
			<nav>
				<MenuItem v-for="code in codes" :key="code" :code="code" />
			</nav>
		</aside>
		<main class="main">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
const codes = COCKTAIL_CODES;
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	min-height: 100vh;
	max-width: $max-width;
	min-width: $min-width - 24px;
	margin: 0 auto;
}

.sidebar {
	width: 25%;
	border-right: 1px solid $gray;
	padding: 16px;
	box-sizing: border-box;

	@media (max-width: 425px) {
		padding: 6px;
	}
}

.main {
	width: 75%;
	padding: 24px;
	box-sizing: border-box;
}
</style>
