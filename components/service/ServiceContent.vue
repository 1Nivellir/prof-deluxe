<template>
	<div class="service__wrapper">
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

	/* ПК/Заголовок Н2 */
	font-family: Akrobat;
	font-size: 46px;
	font-style: normal;
	font-weight: 400;
	line-height: 110%; /* 50.6px */
	text-transform: uppercase;
}
.service {
	&__wrapper {
		padding: 40px;
		display: flex;
		gap: 40px;
	}

	&__text {
		width: calc((100% - 40px) / 2);
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: 130%;
	}

	&__img {
		flex-grow: 1;
	}
	&__image {
		width: 100%;
	}
}
</style>
