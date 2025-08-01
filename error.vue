<script setup lang="ts">
defineProps<{
	error: {
		statusCode: number;
		message: string;
	};
}>();
</script>

<template>
	<div class="container">
		<h1>{{ error.statusCode }}</h1>
		<p class="errror-message">
			{{ error.message }}
		</p>
		<NuxtLink to="/">Вернуться на главную</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.errror-message {
	color: red;
}
</style>
