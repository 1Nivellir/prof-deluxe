<template>
	<li class="blog__item">
		<NuxtLink to="/about/blog/1" class="blog__link" />
		<NuxtImg format="avif,webp,jpeg" :src="`/img/test.jpg`" class="blog__img" />
		<h3 class="blog__title">
			{{ title }}
		</h3>
	</li>
</template>

<script lang="ts" setup>
interface Props {
	minHeight?: string
	item: number
	url: string
	title?: string
}

withDefaults(defineProps<Props>(), {
	minHeight: '310px',
})
</script>

<style scoped lang="scss">
.blog {
	&__link {
		text-decoration: none;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
	}

	&__item {
		position: relative;
		outline: 1px solid var(--c-active);

		&::before {
			content: '';
			clip-path: polygon(0 0, 0 85%, 85% 0);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: var(--c-bg);
			z-index: 1;
		}
	}
	&__img {
		width: 100%;
		height: v-bind(minHeight);
	}

	&__title {
		position: absolute;
		top: 6%;
		left: 3%;
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(18px, 4vw, 24px);
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
		z-index: 2;
	}
}
</style>
