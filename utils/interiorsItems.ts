import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{
			label: 'Дизайн интерьера',
			url: 'interiors-design',
			children: [
				{
					label: 'Жилые интерьеры',
					url: 'residential-interiors',
				},
				{
					label: 'Коммерческие интерьеры',
					url: 'commercial-interiors',
				},
				{
					label: 'Инвестиционный дизайн',
					url: 'investment-design',
				},
				{
					label: 'Хоумстейджинг',
					url: 'home-staging',
				},
				{
					label: 'Организация пространства',
					url: 'space-organization',
				},
			],
		},
		{
			label: 'Декорирование и стайлинг',
			url: 'decorating-and-styling',
		},
		{
			label: 'Портфолио',
			url: 'portfolio',
		},
		{
			label: 'Прайс-лист',
			url: 'pricelist',
			section: '90',
		},
	]
}
