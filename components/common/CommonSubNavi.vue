<template>
	<nav class="aside__nav" v-if="items">
		<ul class="aside__list list-reset">
			<li class="aside__item" v-for="(item, index) in items" :key="index">
				<NuxtLink
					class="aside__link"
					:to="{
						path: `/${currentPage}/${item.url}`,
						query: {
							id: item.id,
						},
					}"
					:class="{
						'aside__link--active':
							route.fullPath === `${route.matched[0].path}/${item.url}`,
					}"
					>{{ item.label }}</NuxtLink
				>
				<ul
					class="aside__list aside__list--sub list-reset"
					v-if="item.children"
				>
					<li v-for="(subItem, subIndex) in item.children" :key="subIndex">
						<NuxtLink
							class="aside__link"
							:to="`/${currentPage}/${subItem.url}`"
							:class="{
								'aside__link--active':
									route.fullPath === `${route.matched[0].path}/${subItem.url}`,
							}"
						>
							{{ subItem.label }}
						</NuxtLink>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
import type { Page } from '~/types/app'

const route = useRoute()
interface Props {
	items?: Page[]
	currentPage: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.aside {
	&__list {
		display: flex;
		flex-direction: column;
		gap: 22px;

		&--sub {
			padding: 24px 30px 0;
		}
	}
	&__link {
		position: relative;
		text-decoration: none;
		cursor: pointer;
		color: var(--c-white);
		font-family: Akrobat;
		font-size: clamp(14px, 3vw, 28px);
		font-weight: 400;
		line-height: 120%;
		padding-left: 20px;

		&::after {
			position: absolute;
			content: '';
			width: 1px;
			height: 16px;
			top: 10%;
			left: 0;
			background: var(--c-active);
		}

		&::before {
			position: absolute;
			content: '';
			width: 9px;
			height: 1px;
			top: 55%;
			left: 0;
			background: var(--c-active);
		}

		&--active {
			font-weight: 700;

			&::after {
				position: absolute;
				content: '';
				width: 2px;
				height: 16px;
				top: 10%;
				left: 0;
				background: var(--c-active);
			}

			&::before {
				position: absolute;
				content: '';
				width: 9px;
				height: 2px;
				top: 55%;
				left: 0;
				background: var(--c-active);
			}
		}
	}
}
</style>
