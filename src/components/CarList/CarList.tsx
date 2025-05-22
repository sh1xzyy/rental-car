import { useSelector } from 'react-redux'
import { useState, type FC } from 'react'
import toast from 'react-hot-toast'
import { selectCars, selectTotalPages } from '../../redux/cars/selector'
import type { CarData } from '../../interfaces/General/redux/CarData'
import ActionButton from '../ActionButton/ActionButton'
import CarItem from '../CarItem/CarItem'
import s from './CarList.module.css'
import { useLoadMore } from '../../hooks/useLoadMore'

const CarList: FC = () => {
	const cars = useSelector(selectCars)
	const totalPages = useSelector(selectTotalPages)
	const { loadMore } = useLoadMore()
	const [page, setPage] = useState(2)

	const handleLoadMore = async () => {
		try {
			setPage(prev => prev + 1)
			await loadMore(page)
		} catch (error) {
			toast.error('Something went wrong')
		}
	}

	return (
		<>
			<ul className={s.carList}>
				{cars.map((car: CarData) => (
					<CarItem key={car.id} car={car} />
				))}
			</ul>
			{page <= totalPages && (
				<ActionButton
					className='loadMoreButton'
					title='Load More'
					event={handleLoadMore}
				/>
			)}
		</>
	)
}

export default CarList
