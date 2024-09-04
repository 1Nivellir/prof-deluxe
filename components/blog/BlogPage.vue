<template>
	<section class="blog section__blogs">
		<h1 class="blog__title title">
			{{ title }}
		</h1>
		<NuxtImg :src="heroImg" format="avif,webp,jpeg" class="blog__img" />
		<div class="blog__content">
			<p class="blog__text">
				Диван – крупный предмет, часто самый крупный в пространстве гостиной. За
				счет размера и центрального положения в планировке он сильно влияет на
				восприятие всей комнаты. Диван должен быть: удобным; сделанным из
				долговечных материалов; и красивым. Его внешний вид отражает ваше
				отношение к стилю, так что к покупке надо подойти ответственно. Я знаю,
				что тренды приходят и уходят, а диван в гостиной остается, но давайте
				все же посмотрим, что будет модно в этом году.
			</p>
		</div>
		<ImagesList :images="imagesGallery" />
		<CommonForm />
	</section>
</template>

<script lang="ts" setup>
defineProps<{
	imagesGallery?: string[]
	title: string
	heroImg?: string
}>()
</script>

<style scoped lang="scss">
.blog {
	&__img {
		width: 100%;
		min-height: 420px;
		object-fit: cover;

		@media screen and (max-width: 640px) {
			min-height: 330px;
		}
	}

	&__text {
		color: var(--c-white);
		font-family: 'Roberto Sans';
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: 130%;
	}
}
</style>
