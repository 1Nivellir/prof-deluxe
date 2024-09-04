import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
	const serviceList = ref<any>([])
	const { $api } = useNuxtApp()
	const useRepo = repositoryApi($api)

	const getAllList = async (id: string) => {
		try {
			const response = await useRepo.getServiceListById(id.toString())
			serviceList.value = await response.data.result
		} catch (error) {
			throw new Error('Произошла ошибка при получении данных')
		}
	}

	const getItemAtArray = (id: string) => {
		return serviceList.value.find((item: any) => item.ID === id)
	}
	return { serviceList, getAllList, getItemAtArray }
})
