<template>
	<section class="images">
		<div>
			<ul class="images__list list-reset">
				<ImagesItem
					v-for="(image, index) in images"
					:key="index"
					:src="`/api${image}`"
				/>
			</ul>
		</div>
	</section>
</template>

<script lang="ts" setup>
interface Props {
	src?: string
	images?: string[]
	gridColumns?: string
}
withDefaults(defineProps<Props>(), {
	gridColumns: 'repeat(3, 1fr)',
})
</script>

<style scoped lang="scss">
.images {
	&__list {
		display: grid;
		grid-template-columns: v-bind(gridColumns);
		gap: 40px;

		@media screen and (max-width: 960px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}
}
</style>
