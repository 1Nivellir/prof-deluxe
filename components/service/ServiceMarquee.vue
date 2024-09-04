<template>
	<div class="service">
		<NuxtMarquee class="service__marquee">
			<ul class="service__list list-reset">
				<li v-for="(item, index) in list" :key="index" class="service__item">
					{{ item }}
				</li>
			</ul>
		</NuxtMarquee>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	list?: any
}
defineProps<Props>()
</script>

<style scoped lang="scss">
.service {
	&__marquee {
		overflow-y: hidden;
	}
	&__list {
		display: flex;
		gap: 10px;
		white-space: nowrap;
	}

	&__item {
		color: #ab9273;
		font-size: 46px;
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		text-transform: uppercase;

		&::after {
			content: '-';
			margin-left: 10px;
		}
	}
}
</style>
