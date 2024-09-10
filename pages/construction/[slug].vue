<template>
	<section
		class="section__blogs service"
		v-if="!route.path.includes('pricelist')"
	>
		<CommonContent
			:item="newItem"
			:stroke-list-concat="newStrokeListConcat"
			:get-img="newGetImg"
		/>
	</section>
	<PricePage v-if="route.path.includes('pricelist')" item="93" />
</template>

<script lang="ts" setup>
const newItem = ref()
const newGetImg = ref()
const newStrokeListConcat = ref()
const route = useRoute()
const { $setIdAndFetch } = useNuxtApp()

await($setIdAndFetch as any)('89')
if (!route.path.includes('pricelist')) {
	const { item, getImg, strokeListConcat } = useStartData()
	newItem.value = item.value
	newGetImg.value = getImg
	newStrokeListConcat.value = strokeListConcat.value
}
</script>

<style lang="scss"></style>
