<template>
	<nav class="aside__nav" v-if="items">
		<ul class="aside__list list-reset">
			<li class="aside__item" v-for="(item, index) in items" :key="index">
				<NuxtLink
					class="aside__link"
					@click="handleClick"
					:to="{
						path: `/${currentPage}/${item.url}`,
						query: {
							id: item.id,
						},
					}"
					:class="{
						'aside__link--active':
							route.fullPath ===
							`${route.matched[0].path}/${item.url}?id=${item.id}`,
					}"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="17"
						viewBox="0 0 10 17"
						fill="none"
						class="aside__link--arrow"
					>
						<path
							d="M1 -5.96046e-07V16H10"
							stroke="#AB9273"
							:stroke-width="
								route.fullPath ===
								`${route.matched[0].path}/${item.url}?id=${item.id}`
									? 2
									: 1
							"
						/>
					</svg>
					{{ item.label }}</NuxtLink
				>
				<ul
					class="aside__list aside__list--sub list-reset"
					v-if="item.children"
				>
					<li v-for="(subItem, subIndex) in item.children" :key="subIndex">
						<NuxtLink
							class="aside__link"
							:to="{
								path: `/${currentPage}/${subItem.url}`,
								query: {
									id: subItem.section,
								},
							}"
							:class="{
								'aside__link--active':
									route.fullPath === `${route.matched[0].path}/${subItem.url}`,
							}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="17"
								viewBox="0 0 10 17"
								fill="none"
								class="aside__link--arrow"
							>
								<path
									d="M1 -5.96046e-07V16H10"
									stroke="#AB9273"
									:stroke-width="
										route.fullPath === `${route.matched[0].path}/${subItem.url}`
											? 2
											: 1
									"
								/>
							</svg>
							{{ subItem.label }}
						</NuxtLink>
					</li>
				</ul>
			</li>
			<li class="aside__item" @click="handleClick">
				<NuxtLink
					v-if="!route.path.includes('about')"
					class="aside__link"
					@click="handleClick"
					:to="{
						path: `/${currentPage}/pricelist`,
						query: {
							id: '90',
						},
					}"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="17"
						viewBox="0 0 10 17"
						fill="none"
						class="aside__link--arrow"
					>
						<path d="M1 -5.96046e-07V16H10" stroke="#AB9273" />
					</svg>
					Прайс-лист</NuxtLink
				>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
import type { Page } from '~/types/app'
const root = useRootStore()

const handleClick = () => {
	root.isOverlay = false
}

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

	&__link--arrow {
		flex-shrink: 0;
	}
	&__link {
		position: relative;
		display: flex;
		gap: 7px;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
		color: var(--c-white);
		font-family: 'Roberto Sans';
		font-size: clamp(14px, 3vw, 28px);
		font-weight: 400;
		line-height: 120%;
	}
}

.aside__link--active {
	font-weight: 500;
}
</style>
