<template>
	<section class="section__blogs">
		<h1 class="blog__title title">Блог</h1>
		<ul class="blog__list list-reset">
			<BlogItem
				v-for="(item, index) in items"
				:key="index"
				:url="`/about/interiors/?id=${item.ID}`"
				:title="item.NAME"
			/>
		</ul>
		<CommonForm />
	</section>
</template>

<script lang="ts" setup>
const items = [
	{
		NAME: 'Интерьеры',
		ID: '82',
	},
	{
		NAME: 'Ремонт',
		ID: '83',
	},
	{
		NAME: 'Декор',
		ID: '84',
	},
	{
		NAME: 'Ландшафт',
		ID: '85',
	},
]
</script>

<style scoped lang="scss">
.blog {
	&__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;

		@media screen and (max-width: 1450px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 1200px) {
			gap: 20px;
		}

		@media screen and (max-width: 960px) {
			grid-template-columns: 1fr;
		}
	}
}
</style>
