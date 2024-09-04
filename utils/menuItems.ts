interface MenuItem {
	label: string
	url: string
}

export default (): MenuItem[] => {
	return [
		{ label: 'Интерьеры', url: '/interiors' },
		{ label: 'Архитектура', url: '/architecture' },
		{ label: 'Ландшафт', url: '/landscaping' },
		{ label: 'Строительство', url: '/construction' },
		{ label: 'О компании', url: '/about' },
	]
}
