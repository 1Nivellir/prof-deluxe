export default defineNuxtPlugin((nuxtApp) => {
	// Создаём функцию для обработки ID и отправки запроса на сервер
	const setIdAndFetch = async (id: string) => {
		if (!id) return

		const store = useRootStore()

		// Отправляем запрос на сервер с текущим id
		try {
			await store.getAllList(id)
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error)
		}
	}

	// Делаем функцию доступной глобально
	nuxtApp.provide('setIdAndFetch', setIdAndFetch)
})
