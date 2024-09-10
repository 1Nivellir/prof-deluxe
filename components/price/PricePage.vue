<template>
	<section class="section__blogs">
		<h1 class="title price__title">Прайс-лист</h1>
		<div class="price__table">
			<PriceTable :items="itemsValue" />
		</div>
		<CommonForm />
	</section>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp()
const useRepo = repositoryApi($api)
interface Props {
	item: any
}

const props = defineProps<Props>()

const { data } = await useAsyncData('interiorsPrice', () =>
	useRepo.getPriceList(props.item)
)

const itemsValue = computed(() => data.value.data.result)
</script>

<style lang="scss">
.price {
	&__header {
		text-align: left;
		background: #ab9273;
		font-size: 24px;
	}

	&__table {
		@media screen and (max-width: 960px) {
			overflow-x: auto;
		}
	}
}
</style>
