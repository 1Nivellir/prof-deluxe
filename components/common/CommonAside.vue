<template>
	<div class="aside__wrapper" v-if="!app.$viewport.isLessThan('desktopMedium')">
		<aside class="aside">
			<CommonSubNavi :currentPage="currentPage" :items="items" />
		</aside>
		<CommonSocial />
	</div>
</template>

<script lang="ts" setup>
import type { Page } from '~/types/app'
const app = useNuxtApp()

interface Props {
	items?: Page[]
	marginBottom?: string
	currentPage: string
	paddingLeft?: string
}
withDefaults(defineProps<Props>(), {
	marginBottom: 'auto',
})
</script>

<style scoped lang="scss">
.aside {
	padding-top: 104px;
	background: var(--c-bg);
	margin-bottom: v-bind(marginBottom);

	&__wrapper {
		width: 24%;
		display: flex;
		padding-left: v-bind(paddingLeft);
		flex-direction: column;
		padding-bottom: 97px;
	}
}
</style>
