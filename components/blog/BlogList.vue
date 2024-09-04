<template>
	<ul class="blog__list list-reset">
		<BlogItem
			v-for="(item, index) in items"
			:key="index"
			:item="item.item"
			:url="item.url"
			:title="item.title"
		/>
	</ul>
</template>

<script lang="ts" setup>
const items = [
	{
		item: 1,
		url: '1',
		title: 'Интерьеры',
	},
	{
		item: 2,
		url: '2',
		title: 'Ремонт',
	},
	{
		item: 3,
		url: '3',
		title: 'Декор',
	},
	{
		item: 4,
		url: '4',
		title: 'Ландшафт',
	},
]
interface Props {
	gridColumns?: string
}

withDefaults(defineProps<Props>(), {
	gridColumns: 'repeat(2, 1fr)',
})
</script>

<style scoped lang="scss">
.blog {
	&__list {
		display: grid;
		grid-template-columns: v-bind(gridColumns);
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
