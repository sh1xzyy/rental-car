import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { getCarsByQueryThunk } from '../redux/cars/options'
import type { AppDispatch } from '../redux/store'

export const useLoadMore = () => {
	const dispatch: AppDispatch = useDispatch()

	const loadMore = async (page: number) => {
		try {
			await dispatch(
				getCarsByQueryThunk({ page: page.toString(), replace: false })
			).unwrap()
		} catch (error) {
			toast.error(`Sorry, we couldn't load car information.`)
		}
	}
	return { loadMore }
}
