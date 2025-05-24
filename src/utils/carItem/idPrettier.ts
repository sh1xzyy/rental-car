export const idPrettier = (id: string) => {
	return id
		.split('-')
		.map(el => el[0])
		.join('')
}
