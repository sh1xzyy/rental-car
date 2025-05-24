import { IoLocationOutline } from 'react-icons/io5'
import type { FC } from 'react'
import type { CarDetailsProps } from '../../interfaces/DetailsPage/CarDetailsProps/CarDetailsProps'
import { selectingAddress } from '../../utils/carItem/selectingAddress'
import { milagePrettier } from '../../utils/carItem/mileagePrettier'
import { idPrettier } from '../../utils/carItem/idPrettier'
import s from './CarDetails.module.css'

const CarDetails: FC<CarDetailsProps> = ({ carDetails }) => {
	if (!carDetails) return null

	const { id, address, year, model, brand, description, mileage, rentalPrice } =
		carDetails
	return (
		<div className={s.detailsWrapper}>
			<div className={s.basicInfoWrapper}>
				<span className={s.title}>
					{brand} {model}, {year}
				</span>
				<span className={s.id}>
					Id:
					{idPrettier(id)}
				</span>
			</div>
			<div className={s.infoWrapper}>
				<span className={s.location}>
					<IoLocationOutline /> {selectingAddress(address, 3)},{' '}
					{selectingAddress(address, 4)}
				</span>
				<span className={s.mileage}>Mileage: {milagePrettier(mileage)} km</span>
			</div>
			<span className={s.price}>${rentalPrice}</span>
			<p className={s.description}>{description}</p>
		</div>
	)
}

export default CarDetails
