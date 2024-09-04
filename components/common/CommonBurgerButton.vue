<template>
	<button class="btn-reset" @click="root.isOverlay = true">
		<NuxtImg src="/svg/burger-icon.svg" :width="width" :height="height" />
	</button>
</template>

<script lang="ts" setup>
import { useRootStore } from '~/stores/root'

const app = useNuxtApp()
const width = ref(62)
const height = ref(44)
const root = useRootStore()
watch(app.$viewport.breakpoint, () => {
	if (app.$viewport.isLessThan('mobileMedium')) {
		width.value = 55
		height.value = 40
	}
})
</script>

<style></style>
