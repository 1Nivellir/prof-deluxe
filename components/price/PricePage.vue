<template>
	<section class="section__blogs">
		<h1 class="title price__title">Прайс-лист</h1>
		<div class="price__table">
			<PriceTable :items="items" />
		</div>
		<CommonForm />
	</section>
</template>

<script lang="ts" setup>
import { ProductService } from '~/utils/mock'
interface Props {
	items: any
}

defineProps<Props>()
onMounted(() => {
	ProductService.getProductsMini().then((data) => (products.value = data))
})

const products = ref()
</script>

<style lang="scss">
.price {
	&__header {
		text-align: left;
		background: #ab9273;
		font-size: 24px;
	}
}
</style>
