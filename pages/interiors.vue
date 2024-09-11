<template>
	<div class="wrapper container">
		<CommonAside
			:items="itemsLinks"
			margin-bottom="28px"
			current-page="interiors"
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
	await store.getAllList('86')
	navigateTo(
		`/interiors/${store.serviceList[0].CODE}?id=${store.serviceList[0].ID}`
	)
})
</script>

<style scoped lang="scss"></style>
