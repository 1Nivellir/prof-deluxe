<template>
	<div class="wrapper">
		<CommonAside
			:items="items"
			margin-bottom="28px"
			current-page="construction"
		/>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
import { getPageParams } from '~/utils/func/getLinks'
const items = computed(() => {
	const list = store.serviceList
	return getPageParams(list)
})
const store = useRootStore()
// await store.getAllList('89')
// await useAsyncData('construction', () => store.getAllList('89'))

onMounted(async () => {
	await store.getAllList('89')
	navigateTo(
		`/construction/${store.serviceList[0].CODE}?id=${store.serviceList[0].ID}`
	)
})

onUnmounted(() => {
	console.log('object')
})
</script>

<style scoped lang="scss"></style>
