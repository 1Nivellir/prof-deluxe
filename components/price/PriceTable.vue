<template>
	<table class="table">
		<thead class="table__head-wrapper">
			<tr>
				<th class="table__head" v-for="(item, index) in head" :key="index">
					<h3 class="table__head-title">{{ item }}</h3>
				</th>
			</tr>
		</thead>
		<tbody v-for="(item, index) in items" :key="index" class="table__body">
			<tr>
				<td colspan="4" style="height: 40px"></td>
			</tr>
			<tr class="table__row">
				<td colspan="4" class="table__td-title">
					<h3 class="table__subtitle">{{ item.NAME }}</h3>
				</td>
			</tr>
			<tr
				v-for="(tr, index) in item.LINK_TOVAR"
				:key="index"
				class="table__row"
				:class="{ 'table__row-active': index % 2 }"
			>
				<td class="table__td">{{ tr.NAME }}</td>
				<td class="table__td">{{ tr.PRICE }}</td>
				<td class="table__price">{{ tr.TIME }}</td>
				<td class="table__td">
					<PriceList :list="tr.WORKS" />
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts" setup>
const head = ['Услуга', 'Цена', 'Сроки*', 'Состав работ']
interface Props {
	items: any
}

const props = defineProps<Props>()

console.log(props.items)
</script>

<style lang="scss">
.table {
	gap: 30px;
	width: 100%;

	&__row {
		outline: 1px solid #ab9273;
	}

	&__row-active {
		background-color: #252627;
	}

	&__body {
		position: relative;
		z-index: 10;
		overflow: hidden;
	}

	&__head-wrapper {
		margin-bottom: 60px;
		background: #ab9273;
	}

	&__td {
		padding: 20px;
		border-right: 1px solid #ab9273;
		color: #fff;
		font-size: clamp(18px, 4vw, 28px);
		font-style: normal;
		font-weight: 400;
		line-height: 120%;
	}

	&__price {
		padding: 20px;
		border-right: 1px solid #ab9273;
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(16px, 4vw, 18px);
		font-style: normal;
		font-weight: 300;
		line-height: 140%;
	}

	&__subtitle {
		padding: 15px 60px;
		color: #ab9273;
		position: relative;
		font-family: 'Roberto Sans';
		font-size: clamp(18px, 4vw, 24px);
		font-style: normal;
		font-weight: 500;
		line-height: 130%;

		&::before {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			width: 62px;
			height: 100%;
			background-image: url('/svg/bgrow.svg');
			background-repeat: no-repeat;
			background-size: contain;
		}
	}

	&__head {
		padding: 20px;

		&:not(:last-child) {
			border-right: 1px solid white;
		}
	}

	&__row-head {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 54px;
			height: 100%;
			background-image: url('/svg/bgrow.svg');
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
	&__head-title {
		text-align: left;
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: clamp(18px, 4vw, 24px);
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
	}
}
</style>
