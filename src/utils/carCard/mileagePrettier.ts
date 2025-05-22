export const milagePrettier = (mileage: number): string => {
	const strMileage = mileage.toString()

	switch (strMileage.length) {
		case 4:
			return strMileage
				.split(' ')
				.map(word => `${word[0]} ${word.slice(1)}`)
				.join('')
		case 5:
			return strMileage
				.split(' ')
				.map(word => `${word.slice(0, 1)} ${word.slice(2)}`)
				.join('')
		case 6:
			return strMileage
				.split(' ')
				.map(word => `${word.slice(0, 2)} ${word.slice(3)}`)
				.join('')
		default:
			return strMileage
	}
}
