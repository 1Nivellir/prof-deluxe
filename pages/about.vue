<template>
	<div class="wrapper">
		<CommonAside
			:items="pageItems()"
			margin-bottom="28px"
			current-page="about"
		/>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
import pageItems from '~/utils/aboutItems'
const route = useRoute()
const { $api } = useNuxtApp()
const useRepo = repositoryApi($api)
console.log(route)
onMounted(() => {
	if (route.matched.length > 1) return
	navigateTo(`/about/${pageItems()[0].url}`)
})

const { data } = await useAsyncData('about', async () =>
	useRepo.getServiceList()
)

console.log(data.value)
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
}
</style>
