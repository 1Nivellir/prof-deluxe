<template>
	<teleport to="body">
		<transition name="burger" mode="out-in">
			<div class="overlay" v-if="store.isOverlay">
				<div class="overlay__wrapper">
					<button
						class="btn-reset overlay__close"
						@click="store.isOverlay = false"
					>
						<NuxtImg src="/img/close-icon.png" width="50" height="50" />
					</button>
					<div class="overlay__content">
						<CommonNavigation
							flexDirection="column"
							alignItems="flex-start"
							:currentPage="currentPage || ''"
							:itemSubNuv="itemsLinks"
						/>
					</div>
					<CommonSubNavi
						v-if="$viewport.isGreaterThan('mobile')"
						:currentPage="currentPage || ''"
						:items="itemsLinks"
					/>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts" setup>
import { useRoute } from '#imports'
import { useRootStore } from '~/stores/root'
import { getPageParams } from '~/utils/func/getLinks'
const route = useRoute()
const currentPage = computed(() => {
	console.log(route.matched[0].name?.toString())
	return route.matched[0].name?.toString()
})
const store = useRootStore()

const itemsLinks = computed(() => {
	const list = store.serviceList
	return getPageParams(list)
})
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
		top: 10%;
		right: 5%;
		z-index: 102;
	}
}

.burger-enter-active,
.burger-leave-active {
	transition: all 0.3s ease;
}

.burger-enter-from,
.burger-leave-to {
	opacity: 0;
}
</style>
