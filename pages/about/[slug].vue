<template>
	<section class="section__blogs service">
		<div
			class="service__wrapper"
			v-if="
				!route.path.includes('contacts') &&
				!route.path.includes('company') &&
				!route.path.includes('partners')
			"
		>
			<BlogList
				:list-items="items"
				gridColumns="repeat(3, 1fr)"
				minHeight="410px"
			/>
		</div>
		<ServiceAbout v-if="route.path.includes('company')" />
		<ServicePartners v-if="route.path.includes('partners')" />
		<div class="service__wrapper" v-if="route.path.includes('contacts')">
			<BlogContacts />
		</div>
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
