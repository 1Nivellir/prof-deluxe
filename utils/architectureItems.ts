import type { Page } from '../types/app'

export default (): Page[] => {
	return [
		{
			label: 'Загородный жилой дом',
			url: 'residential-house',
		},
		{
			label: 'Бани, сауны, хамам',
			url: 'baths',
		},
		{
			label: 'Малые архитектурные формы',
			url: 'small-architectural-forms',
		},
		{
			label: 'Инженерное проектирование',
			url: 'engineering-design',
		},
		{
			label: 'Портфолио',
			url: 'portfolio',
		},
		{
			label: 'Прайс-лист',
			url: 'pricelist',
			section: '91',
		},
	]
}
