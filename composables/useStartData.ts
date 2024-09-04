export const useStartData = () => {
	const route = useRoute()
	const store = useRootStore()

	const item = computed(() =>
		store.getItemAtArray(route.query.id?.toString() || '')
	)
	const strokeListConcat = computed(() => {
		return [...item.value.STROCK, ...item.value.STROCK]
	})
	const getImg = (itemList: any) => {
		return `/api${itemList.PREVIEW_PICTURE}`
	}

	return {
		item,
		strokeListConcat,
		getImg,
	}
}
