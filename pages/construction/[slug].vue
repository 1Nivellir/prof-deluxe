<template>
	<section class="section__blogs service">
		<div
			class="service__wrapper"
			:style="{ backgroundImage: `url(${getImg(item)})` }"
		>
			<ServiceHero :NAME="item.NAME" :PREVIEW_TEXT="item.PREVIEW_TEXT" />
		</div>
		<ServiceMarquee :list="strokeListConcat" />
		<div class="service__content">
			<ImagesList :images="item.PHOTOGALLERY" />
			<ServiceContent
				:DETAIL_TEXT="item.DETAIL_TEXT"
				:DETAIL_PICTURE="item.DETAIL_PICTURE"
			/>
			<CommonForm />
		</div>
	</section>
	<!-- <PricePage
		v-if="route.path.includes('pricelist')"
		:items="data.data.result"
	/> -->
</template>

<script lang="ts" setup>
const { item, getImg, strokeListConcat } = useStartData()
// interface Props {
// 	query: any
// }
// const props = defineProps<Props>()
// const store = useRootStore()

// const item = computed(() => store.getItemAtArray(props.query))
// const strokeListConcat = computed(() => {
// 	return [...item.value.STROCK, ...item.value.STROCK]
// })
// const getImg = (itemList: any) => {
// 	return `/api${itemList.PREVIEW_PICTURE}`
// }
</script>

<style lang="scss"></style>
