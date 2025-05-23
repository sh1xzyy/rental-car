import { useState, useEffect } from 'react'

export function useFavoriteLocalStorage(id: string) {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favoriteCars = JSON.parse(
			localStorage.getItem('favoriteCars') || '[]'
		) as string[]
		setIsFavorite(favoriteCars.includes(id))
	}, [id])

	const toggleFavorite = () => {
		const favoriteCars = JSON.parse(
			localStorage.getItem('favoriteCars') || '[]'
		) as string[]

		if (!favoriteCars.includes(id)) {
			favoriteCars.push(id)
			setIsFavorite(true)
		} else {
			const updatedFavorites = favoriteCars.filter(carId => carId !== id)
			localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites))
			setIsFavorite(false)
			return
		}

		localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars))
	}

	return { isFavorite, toggleFavorite }
}
