<template>
	<ul class="social__list list-reset">
		<li
			class="social__item"
			v-for="(item, index) in socialItems()"
			:key="index"
		>
			<NuxtImg width="36" height="36" :src="`/svg/${item.icon}.svg`"> </NuxtImg>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import socialItems from '~/utils/socialItems'
</script>

<style scoped lang="scss">
.social {
	&__list {
		display: flex;
		gap: 20px;
	}
}
</style>
