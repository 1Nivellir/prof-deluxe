import type { Page } from '~/types/app'

export const getPageParams = (arr: any): Page[] => {
	return arr.map((item: any) => {
		if (item.children) {
			return {
				id: item.ID,
				section: item.section || '0',
				label: item.NAME,
				url: item.CODE,
				children: getPageParams(item.children),
			}
		}
		return {
			section: item.section || '0',
			id: item.ID,
			label: item.NAME,
			url: item.CODE,
		}
	})
}
