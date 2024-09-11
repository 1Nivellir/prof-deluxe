<template>
	<div class="service__wrapper">
		<svg
			class="service__decor-top"
			xmlns="http://www.w3.org/2000/svg"
			width="129"
			height="129"
			viewBox="0 0 129 129"
			fill="none"
		>
			<path d="M129 1H1V129" stroke="#AB9273" stroke-width="2" />
		</svg>
		<svg
			class="service__decor-bottom"
			xmlns="http://www.w3.org/2000/svg"
			width="129"
			height="129"
			viewBox="0 0 129 129"
			fill="none"
		>
			<path
				d="M-5.96046e-07 128H128V9.53674e-07"
				stroke="#AB9273"
				stroke-width="2"
			/>
		</svg>
		<div class="service__text" v-html="parseText(DETAIL_TEXT)" ref="text"></div>
		<div class="service__img">
			<NuxtImg
				:src="`/api${DETAIL_PICTURE}`"
				alt=""
				provider="none"
				class="service__image"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const text = ref()
interface Props {
	DETAIL_TEXT: any
	DETAIL_PICTURE: string
}

const props = defineProps<Props>()
const parseText = (text: string) => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(text, 'text/html')
	const container = document.createElement('div')

	Array.from(doc.body.childNodes).forEach((node) => {
		if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
			if (node.tagName.toLowerCase() === 'h3') {
				node.style.color = '#fff'
				node.style.marginBottom = '30px'
				node.style.fontFamily = 'Akrobat'
				node.style.fontSize = '46px'
				node.style.fontStyle = 'normal'
				node.style.fontWeight = '400'
				node.style.lineHeight = '110%'
				node.style.textTransform = 'uppercase'
			}
			container.appendChild(node.cloneNode(true))
		} else if (node.nodeType === Node.TEXT_NODE) {
			const span = document.createElement('span')
			span.textContent = node.textContent || ''
			Object.assign(span.style, {
				fontFamily: 'Roberto Sans',
				fontSize: '24px',
				fontStyle: 'normal',
				fontWeight: ' 300',
				lineHeight: '110%',
				marginBottom: '20px',
				display: 'block',
			})
			container.appendChild(span)
		}
	})

	return container.innerHTML
}
onMounted(() => {
	parseText(props.DETAIL_TEXT)
})
</script>

<style lang="scss" scoped>
h3 {
	color: #fff;
	font-family: Akrobat;
	font-size: 46px;
	font-style: normal;
	font-weight: 400;
	line-height: 110%;
	text-transform: uppercase;
}
.service {
	&__wrapper {
		position: relative;
		padding: 40px;
		display: flex;
		gap: 40px;

		@media screen and (max-width: 960px) {
			flex-direction: column-reverse;
			padding: 20px;
		}
	}

	&__image {
		width: 100%;
	}
	&__decor-top {
		position: absolute;
		top: 0;
		left: 0;
	}

	&__decor-bottom {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	&__text {
		width: calc((100% - 40px) / 2);
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: 130%;

		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}

	&__img {
		flex-grow: 1;
	}
}
</style>
