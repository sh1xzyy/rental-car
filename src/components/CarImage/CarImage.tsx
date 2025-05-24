import type { FC } from 'react'
import s from './CarImage.module.css'
import type { CarDetailsProps } from '../../interfaces/DetailsPage/CarDetailsProps/CarDetailsProps'

const CarImage: FC<CarDetailsProps> = ({ carDetails }) => {
	if (!carDetails) return null
	const { img, description } = carDetails
	return <img className={s.img} src={img} alt={description} loading='lazy' />
}

export default CarImage
