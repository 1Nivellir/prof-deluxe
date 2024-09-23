<template>
	<div class="wrapper container">
		<CommonAside
			:items="getPageParams(pageItems())"
			margin-bottom="28px"
			current-page="about"
		/>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
import pageItems from '~/utils/aboutItems'
import { getPageParams } from '~/utils/func/getLinks'
const route = useRoute()
onMounted(() => {
	if (route.matched.length > 1) return
	navigateTo(`/about/${pageItems()[0].url}`)
})
</script>

<style scoped lang="scss">
.container {
	@media screen and (max-width: 1200px) {
		padding: 0;
	}
}
</style>
