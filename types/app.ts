export interface Page {
	id?: string
	label: string
	url: string
	section?: string
	children?: Page[]
}
