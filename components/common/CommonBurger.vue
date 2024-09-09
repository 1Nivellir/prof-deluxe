<template>
	<teleport to="body">
		<div class="overlay" v-if="root.isOverlay">
			<div class="overlay__wrapper">
				<button
					class="btn-reset overlay__close"
					@click="root.isOverlay = false"
				>
					<NuxtImg src="/img/close-icon.png" width="50" height="50" />
				</button>
				<div class="overlay__content">
					<CommonNavigation flexDirection="column" alignItems="flex-start" />
				</div>
				<CommonSubNavi :currentPage="currentPage || ''" :items="itemsLinks" />
			</div>
		</div>
	</teleport>
	<div></div>
</template>

<script lang="ts" setup>
import { useRoute } from '#imports'
import { useRootStore } from '~/stores/root'
import { getPageParams } from '~/utils/func/getLinks'
const route = useRoute()
const currentPage = computed(() => {
	return route.matched[0].name?.toString()
})
const store = useRootStore()

const itemsLinks = computed(() => {
	const list = store.serviceList
	return getPageParams(list)
})
const root = useRootStore()
</script>

<style scoped lang="scss">
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	background: var(--c-bg);

	&__wrapper {
		position: relative;
		display: flex;
		gap: 15px;
		padding-top: 130px;
		padding-left: 30px;
		padding-right: 30px;
		width: 100%;
		height: 100%;
	}

	&__close {
		position: absolute;
		top: 20%;
		right: 5%;
		z-index: 102;
	}
}
</style>
