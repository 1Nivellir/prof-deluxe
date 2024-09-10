<template>
	<nav class="header__nav">
		<ul class="header__list list-reset">
			<li
				class="header__item"
				v-for="(item, index) in menuItems()"
				:key="index"
			>
				<NuxtLink
					class="header__link"
					:to="item.url"
					:class="{ isActive: route.matched[0].path === item.url }"
				>
					{{ item.label }}
					<span></span><span></span><span></span><span></span>
				</NuxtLink>
				<div
					class="header__sub"
					v-if="
						`/${currentPage}` === item.url &&
						$viewport.isLessThan('mobileMedium')
					"
				>
					<CommonSubNavi
						:items="itemSubNuv"
						:current-page="currentPage || ''"
					/>
				</div>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
import { useRoute } from '#imports'

import menuItems from '~/utils/menuItems'
const route = useRoute()
interface Props {
	flexDirection?: string
	alignItems?: string
	itemSubNuv?: any
	currentPage?: string
}
withDefaults(defineProps<Props>(), {
	flexDirection: 'row',
	alignItems: 'center',
})
</script>

<style scoped lang="scss">
.header {
	&__link {
		padding: 1px 10px;
		text-decoration: none;
		cursor: pointer;
		color: var(--c-white);
		font-size: clamp(18px, 5vw, 30px);
		font-weight: 400;
		line-height: 120%;
		text-transform: uppercase;
	}

	&__sub {
		padding: 20px;
	}
	&__nav {
		margin-right: 35px;
	}

	&__list {
		display: flex;
		flex-direction: v-bind(flexDirection);
		align-items: v-bind(alignItems);
		gap: 15px;
		flex-wrap: wrap;
	}
}

.isActive {
	position: relative;
	color: var(--c-active);
	font-weight: 600;
	line-height: 120%;

	& span:nth-of-type(2) {
		position: absolute;
		width: 11px;
		height: 2px;
		top: 0;
		left: 0;
		background: var(--c-active);
	}

	& span:nth-of-type(1) {
		position: absolute;
		width: 2px;
		height: 11px;
		top: 0;
		left: 0;
		background: var(--c-active);
	}

	& span:nth-of-type(3) {
		position: absolute;
		width: 2px;
		height: 11px;
		bottom: 2px;
		right: 0;
		background: var(--c-active);
	}

	& span:nth-of-type(4) {
		position: absolute;
		width: 11px;
		height: 2px;
		bottom: 0px;
		right: 0;
		background: var(--c-active);
	}
}
</style>
