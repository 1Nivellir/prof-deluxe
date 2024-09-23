<template>
	<div class="service__wrapper">
		<h1 class="partners__title title">Партнеры</h1>
		<div class="partners" v-show="!$viewport.isLessThan('tabletMedium')">
			<ul class="partners__list list-reset">
				<li class="partners__item" v-for="(_, index) in 8">
					<NuxtImg :src="`/img/logo-totservice-${getIndex(index)}.png`" />
				</li>
			</ul>
		</div>
		<div
			class="embla"
			ref="emblaRef"
			v-show="$viewport.isLessThan('tabletMedium')"
		>
			<div class="embla__container">
				<div class="embla__slide" v-for="(_, index) in 8">
					<NuxtImg :src="`/img/logo-totservice-${getIndex(index)}.png`" />
				</div>
			</div>
		</div>
		<CommonForm />
	</div>
</template>

<script lang="ts" setup>
import type { EmblaOptionsType } from 'embla-carousel'
import emblaCarouselVue from 'embla-carousel-vue'
const app = useNuxtApp()
const getIndex = (index: number) => {
	return index % 2 === 0 ? 1 : 2
}
const options: EmblaOptionsType = {
	loop: true,
	slidesToScroll: 'auto',
}

const [emblaRef] = emblaCarouselVue(options)
</script>

<style lang="scss" scoped>
.partners {
	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px 90px;
	}

	&__title {
		margin-bottom: 60px;
	}
}
.embla {
	overflow: hidden;
}
.embla__container {
	display: grid;
	grid-auto-flow: column;
	gap: 20px;
	/* stylelint-disable-next-line value-keyword-case */
	grid-auto-columns: calc((100% - (20px * (3 - 1))) / 3);
}
</style>
