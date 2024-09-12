<template>
	<div class="wrapper container">
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
</script>

<style scoped lang="scss">
.container {
	@media screen and (max-width: 1200px) {
		padding: 0;
	}
}
</style>
