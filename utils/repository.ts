import type { $Fetch, NitroFetchRequest } from 'nitropack'

interface Res {
	[key: string]: any
}

interface Price {
	data: {
		result: Res
	}
}
export const repositoryApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async getServiceList(): Promise<Res[]> {
		return fetch<Res[]>('/api/api/profdeluxe/service?type=getList')
	},

	async getPriceList(id: string): Promise<any> {
		return fetch<any>(
			`/api/api/profdeluxe/price?type=getList&params[pageSize]=10&params[pageNum]=1&params[section]=${id}`
		)
	},
	async getContacts(): Promise<Res[]> {
		return fetch<Res[]>('/api/api/profdeluxe/contact?type=getList')
	},

	async getBlogList(): Promise<Res[]> {
		return fetch<Res[]>('/api/api/profdeluxe/blog?type=getList')
	},

	async getServiceListById(id: string): Promise<any> {
		return fetch<Res[]>(
			`/api/api/profdeluxe/service?type=getList&params[pageSize]=10&params[pageNum]=1&params[section]=${id}`
		)
	},
})
