import { useSelector } from 'react-redux'
import { useRef, type FC } from 'react'
import { selectCars, selectTotalPages } from '../../redux/cars/selector'
import type { CarData } from '../../interfaces/General/redux/CarData'
import ActionButton from '../ActionButton/ActionButton'
import { useLoadMore } from '../../hooks/useLoadMore'
import CarItem from '../CarItem/CarItem'
import s from './CarList.module.css'
import { scrollList } from '../../utils/carList/scrollList'

const CarList: FC = () => {
	const totalPages = useSelector(selectTotalPages)
	const cars = useSelector(selectCars)
	const galleryRef = useRef<HTMLUListElement | null>(null)
	const currentPage = Math.ceil(cars.length / 10)
	const { loadMore } = useLoadMore()

	const handleLoadMore = async () => {
		await loadMore(currentPage + 1)
		scrollList(galleryRef.current)
	}

	return (
		<>
			<h2 className='visually-hidden'>Car List</h2>
			<ul className={s.carList} ref={galleryRef}>
				{cars.map((car: CarData) => (
					<CarItem key={car.id} car={car} />
				))}
			</ul>
			{currentPage < totalPages && (
				<ActionButton
					className='loadMoreButton'
					title='Load More'
					type='submit'
					event={handleLoadMore}
				/>
			)}
		</>
	)
}

export default CarList
