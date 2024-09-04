<template>
	<header class="header">
		<div class="container header__container">
			<nuxt-link to="/" class="header__logo">
				<NuxtImg src="/logo.svg" :height="logoHeight" :width="logoWidth" />
			</nuxt-link>
			<CommonNavigation v-if="!isShowBurger" />
			<a v-if="!isShowBurger" href="tel:+74993509461" class="header__phone"
				>+7&nbsp;(499)&nbsp;350&nbsp;94&nbsp;61</a
			>
			<CommonBurgerButton v-else />
		</div>
	</header>
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#imports'
const logoWidth = ref(260)
const logoHeight = ref(121)
const isShowBurger = ref(false)
const app = useNuxtApp()

onBeforeMount(() => {
	isShowBurger.value = app.$viewport.isLessThan('desktopMedium') ? true : false
})

watch(app.$viewport.breakpoint, () => {
	isShowBurger.value = app.$viewport.isLessThan('desktopMedium') ? true : false

	if (app.$viewport.isGreaterThan('tablet')) {
		logoHeight.value = 121
		logoWidth.value = 260
	}
	if (app.$viewport.isLessThan('tablet')) {
		logoHeight.value = 61
		logoWidth.value = 133
	}
	if (app.$viewport.isLessThan('mobileMedium')) {
		logoHeight.value = 65
		logoWidth.value = 140
	}
})
</script>

<style lang="scss" scoped>
.header {
	padding-top: 60px;
	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__logo {
		margin-right: 35px;
	}
	&__phone {
		cursor: pointer;
		text-decoration: none;
		color: var(--c-white);
		font-size: 30px;
		font-weight: 400;
		line-height: 120%;
		text-transform: uppercase;
		text-align: right;
	}
}
</style>
