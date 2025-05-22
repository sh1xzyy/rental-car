import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import type { initCatalogSearchTools } from '../interfaces/CatalogPage/CatalogSearchTools/initCatalogSearchTools'
import { getCarsByQueryThunk } from '../redux/cars/options'
import type { AppDispatch } from '../redux/store'

export const useSearchCars = () => {
	const dispatch: AppDispatch = useDispatch()
	const [, setSearchParams] = useSearchParams()

	const searchCars = async (query: initCatalogSearchTools) => {
		try {
			const filteredParams = Object.fromEntries(
				Object.entries(query).filter(([, value]) => value !== '')
			)

			await dispatch(getCarsByQueryThunk({ ...query, replace: true })).unwrap()
			setSearchParams(filteredParams)
		} catch (error) {
			toast.error('Sorry, nothing was found for your request.')
		}
	}
	return { searchCars }
}
