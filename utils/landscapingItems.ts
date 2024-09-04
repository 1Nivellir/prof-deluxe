import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{
			label: 'Ландшафтный дизайн',
			url: 'landscaping-design',
		},
		{
			label: 'Инженерные системы',
			url: 'engineering-systems',
			id: '1290',
		},
		{
			label: 'Благоустройство и озеленение',
			url: 'sustainability-and-reenforcement',
			id: '1292',
		},
		{
			label: 'Портфолио',
			url: 'portfolio',
		},
		{
			label: 'Прайс-лист',
			url: 'pricelist',
			section: '92',
		},
	]
}
