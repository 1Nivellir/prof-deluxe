import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{ id: '1333', NAME: 'О компании', CODE: 'company' },
		{
			id: '1334',
			NAME: 'Блог',
			CODE: 'blog',
			children: [
				{ id: '1335', NAME: 'Интерьеры', CODE: 'interiors', section: '82' },
				{ id: '1336', NAME: 'Ремонт', CODE: 'repair', section: '83' },
				{ id: '1337', NAME: 'Декор', CODE: 'decor', section: '84' },
				{ id: '1338', NAME: 'Ландшафт', CODE: 'landscaping', section: '85' },
			],
		},
		{ id: '1339', NAME: 'Партнеры', CODE: 'partners' },
		{ id: '1340', NAME: 'Контакты', CODE: 'contacts' },
	]
}
