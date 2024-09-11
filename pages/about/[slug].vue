<template>
	<section class="section__blogs">
		<h1 class="blog__title title" v-if="!route.path.includes('contacts')">
			Блог: {{ route.params.slug }}
		</h1>
		<BlogList
			:list-items="items"
			gridColumns="repeat(3, 1fr)"
			minHeight="410px"
			v-if="!route.path.includes('contacts')"
		/>
		<BlogContacts v-if="route.path.includes('contacts')" />
		<CommonForm />
	</section>
</template>

<script lang="ts" setup>
const route = useRoute()
const items = [
	{
		item: 1,
		url: '1',
	},
	{
		item: 2,
		url: '2',
	},
	{
		item: 3,
		url: '3',
	},
	{
		item: 4,
		url: '4',
	},
]
</script>

<style scoped lang="scss">
.about {
	height: 80vh;
	width: 100%;
}
</style>
