import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{
			label: 'Строительство домов',
			url: 'construction',
			id: '1291',
		},
		{
			label: 'Ремонт квартир',
			url: 'repair',
			id: '1298',
		},
		{
			label: 'Технический надзор',
			url: 'technical-control',
			id: '1299',
		},
		{
			label: 'Авторский надзор',
			url: 'authorial-control',
			id: '1300',
		},
		{
			label: 'Комплектация',
			url: 'complectation',
			id: '1301',
		},
		{
			label: 'Прайс-лист',
			url: 'pricelist',
			section: '93',
		},
	]
}
