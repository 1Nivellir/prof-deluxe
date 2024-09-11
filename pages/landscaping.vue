<template>
	<div class="wrapper container">
		<CommonAside
			:items="itemsLinks"
			margin-bottom="28px"
			current-page="landscaping"
		/>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
import { getPageParams } from '~/utils/func/getLinks'

const route = useRoute()
const store = useRootStore()

const itemsLinks = computed(() => {
	const list = store.serviceList
	return getPageParams(list)
})
onMounted(async () => {
	await store.getAllList('88')
	navigateTo(
		`/landscaping/${store.serviceList[0].CODE}?id=${store.serviceList[0].ID}`
	)
})

// await store.getAllList('88')
// await useAsyncData('construction', async () => await store.getAllList('88'))
</script>

<style scoped lang="scss"></style>
