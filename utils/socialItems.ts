interface Social {
	tooltip: string
	icon: string
	url: string
}

export default (): Social[] => {
	return [
		{
			tooltip: 'Мы в телеграм',
			icon: 'telegram',
			url: 'https://t.me/prof_deluxe',
		},
		{
			tooltip: 'Мы в вконтакте',
			icon: 'vk',
			url: 'https://vk.com/prof_deluxe',
		},
		{
			tooltip: 'Мы в Pinterest',
			icon: 'pinter',
			url: '',
		},
		{
			tooltip: 'Мы в Houzz',
			icon: 'houzz',
			url: '',
		},
	]
}
