import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{
			label: 'О компании',
			url: 'company',
		},
		{
			label: 'Блог',
			url: 'blog',
			children: [
				{
					label: 'Интерьеры',
					url: 'interiors',
					section: '82',
				},
				{
					label: 'Ремонт',
					url: 'repair',
					section: '83',
				},
				{
					label: 'Декор',
					url: 'decor',
					section: '84',
				},
				{
					label: 'Ландшафт',
					url: 'landscaping',
					section: '85',
				},
			],
		},
		{
			label: 'Партнеры',
			url: 'partners',
		},
		{
			label: 'Контакты',
			url: 'contacts',
		},
	]
}
