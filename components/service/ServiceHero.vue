<template>
	<section class="service">
		<!-- <NuxtImg :src="" /> -->
		<h1 class="service__title title">
			{{ NAME }}
		</h1>
		<div v-html="parcer(PREVIEW_TEXT)" class="service__text"></div>
	</section>
</template>

<script lang="ts" setup>
interface Props {
	NAME: string
	PREVIEW_PICTURE?: string
	PREVIEW_TEXT?: any
}
const props = defineProps<Props>()

const parcer = (text: string) => {
	const parser = new DOMParser()

	const container = document.createElement('div')
	const doc = parser.parseFromString(text, 'text/html')
	Array.from(doc.body.childNodes).forEach((node) => {
		if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
			if (node.tagName.toLowerCase() === 'blockquote') {
				const title = document.createElement('h3')
				title.textContent = node.textContent || ''
				Object.assign(title.style, {
					color: '#AB9273',
					marginBottom: '30px',
					fontFamily: 'Roberto Sans',
					fontSize: '24px',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '120%',
				})
				container.appendChild(title)
				return
			}
			// container.appendChild(node.cloneNode(true))
		} else if (node.nodeType === Node.TEXT_NODE) {
			const span = document.createElement('span')
			span.textContent = node.textContent || ''
			Object.assign(span.style, {
				fontFamily: 'Roberto Sans',
				fontSize: '24px',
				marginBottom: '30px',
				fontStyle: 'normal',
				fontWeight: ' 300',
				lineHeight: '110%',
				display: 'block',
			})

			container.appendChild(span)
		}
	})
	return container.innerHTML
}
const getImage = computed(() => {
	return props.PREVIEW_PICTURE
})
</script>

<style scoped lang="scss">
.service {
	position: relative;

	&__title {
		margin-bottom: 40px;
	}
	&__text {
		color: #fff;
		font-family: 'Roberto Sans';
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: 130%;

		max-width: 1010px;
	}
}
</style>
