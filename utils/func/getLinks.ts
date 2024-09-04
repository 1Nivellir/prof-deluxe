import type { Page } from '~/types/app'

export const getPageParams = (arr: any): Page[] => {
	return arr.map((item: any) => {
		return {
			id: item.ID,
			label: item.NAME,
			url: item.CODE,
		}
	})
}
