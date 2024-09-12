<template>
	<div
		class="service__wrapper"
		:style="{ backgroundImage: `url(${getImg(item)})` }"
	>
		<ServiceHero :NAME="item.NAME" :PREVIEW_TEXT="item.PREVIEW_TEXT" />
	</div>
	<div class="service__marquee">
		<ServiceMarquee :list="strokeListConcat" />
	</div>
	<div class="service__content">
		<ImagesList
			:images="item.PHOTOGALLERY"
			v-if="item.PHOTOGALLERY.length > 0"
		/>
		<ServiceContent
			v-if="item.DETAIL_TEXT"
			:DETAIL_TEXT="item.DETAIL_TEXT"
			:DETAIL_PICTURE="item.DETAIL_PICTURE"
		/>
		<CommonForm />
	</div>
</template>

<script lang="ts" setup>
interface Props {
	item: any
	getImg: any
	strokeListConcat: any
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.service__marquee {
	overflow: hidden;
}
</style>
