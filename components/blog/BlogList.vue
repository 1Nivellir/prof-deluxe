<template>
	<ul class="blog__list list-reset">
		<BlogItem
			v-for="(item, index) in items"
			:key="index"
			:item="item.item"
			:url="item.ID"
			:title="item.NAME"
		/>
	</ul>
</template>

<script lang="ts" setup>
const route = useRoute()
const { $api } = useNuxtApp()
const useRepo = repositoryApi($api)

const { data } = await useAsyncData('blog', () =>
	useRepo.getBlogItems(route.query.id as string)
)

const items = computed(() => data.value.data.result)
console.log(data.value.data.result)
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
