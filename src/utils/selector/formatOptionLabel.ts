export const formatOptionLabel = (
	option: { value: string; label: string },
	{ context }: { context: 'menu' | 'value' },
	name: string
) => {
	if (name === 'rentalPrice' && context === 'value') {
		return `To $${option.label} `
	}
	return option.label
}
