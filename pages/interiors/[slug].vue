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
// const route = useRoute()
// const { $api } = useNuxtApp()
// const useRepo = repositoryApi($api)
// console.log(route)
// const { data } = await useAsyncData('interiors', () =>
// 	useRepo.getPriceList(route.query.section as string)
// )

// console.log(data.value)
</script>

<style lang="scss">
.service {
	padding: 0;

	&__content {
		padding: 0 80px;
	}
}
</style>
