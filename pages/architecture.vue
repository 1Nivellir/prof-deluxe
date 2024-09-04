<template>
	<div class="wrapper">
		<CommonAside
			:items="itemsLinks"
			margin-bottom="28px"
			current-page="architecture"
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
	await store.getAllList('87')
	navigateTo(
		`/architecture/${store.serviceList[0].CODE}?id=${store.serviceList[0].ID}`
	)
})
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
