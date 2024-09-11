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
	width: 100%;
	padding-top: 104px;
	background: var(--c-bg);
	margin-bottom: v-bind(marginBottom);

	&__wrapper {
		display: flex;
		padding-left: v-bind(paddingLeft);
		flex-direction: column;
		padding-bottom: 97px;
	}
}
</style>
