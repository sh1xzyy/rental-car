import { useSelector } from 'react-redux'
import { useState, type FC } from 'react'
import { selectCars, selectTotalPages } from '../../redux/cars/selector'
import type { CarData } from '../../interfaces/General/redux/CarData'
import ActionButton from '../ActionButton/ActionButton'
import CarItem from '../CarItem/CarItem'
import s from './CarList.module.css'
import { useLoadMore } from '../../hooks/useLoadMore'

const CarList: FC = () => {
	const totalPages = useSelector(selectTotalPages)
	const cars = useSelector(selectCars)
	const [page, setPage] = useState(2)
	const { loadMore } = useLoadMore()

	const handleLoadMore = async () => {
		setPage(prev => prev + 1)
		await loadMore(page)
		setTimeout(() => {
			scrollBy({
				behavior: 'smooth',
				top: 500,
			})
		}, 250)
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
