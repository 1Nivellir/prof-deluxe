<template>
	<li class="images__item">
		<NuxtLink :to="url">
			<NuxtImg
				:src="src"
				class="images__img"
				:minHeight="minHeight"
				provider="none"
			/>
		</NuxtLink>
	</li>
</template>

<script lang="ts" setup>
defineProps<{
	minHeight?: string
	url?: string
	src?: string
}>()
</script>

<style scoped lang="scss">
.images__img {
	width: 100%;
	min-height: v-bind(minHeight);

	@media screen and (max-width: 960px) {
		min-height: 250px;
	}
}
</style>
