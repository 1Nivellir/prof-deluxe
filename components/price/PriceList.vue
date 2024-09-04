<template>
	<ul class="table__list">
		<li class="table__item" v-for="(item, index) in list" :key="index">
			{{ item }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
interface Props {
	list: any
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.table {
	&__list {
		padding-left: 25px;
		display: flex;
		flex-direction: column;
	}

	&__item {
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: 18px;
		font-style: normal;
		font-weight: 300;
		line-height: 140%;
	}
}
</style>
