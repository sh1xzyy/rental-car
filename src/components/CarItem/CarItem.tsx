import type { FC } from 'react'
import s from './CarItem.module.css'
import { selectingAddress } from '../../utils/carCard/selectingAddress'
import { milagePrettier } from '../../utils/carCard/mileagePrettier'
import type { CarProps } from '../../interfaces/CatalogPage/Car/Car'
import { typePrettier } from '../../utils/carCard/typePrettier'
import MainButton from '../NavigationButton/NavigationButton'

const CarItem: FC<CarProps> = ({
	car: {
		id,
		img,
		description,
		brand,
		model,
		year,
		rentalPrice,
		address,
		rentalCompany,
		type,
		mileage,
	},
}) => {
	return (
		<>
			<li className={s.carItem}>
				<div className={s.imgWrapper}>
					<img className={s.img} src={img} alt={description} loading='lazy' />
					<svg className={s.favoriteIcon} width={16} height={16}>
						<use href='/icons/icons.svg#icon-heart' />
					</svg>
				</div>
				<div className={s.headerWrapper}>
					<h3 className={s.title}>
						{brand} <span>{model}</span>, {year}
					</h3>
					<p className={s.price}>${rentalPrice}</p>
				</div>
				<div className={s.infoWrapper}>
					<span>{selectingAddress(address, 3)}</span>
					<span>{selectingAddress(address, 4)}</span>
					<span>{rentalCompany}</span>
					<span>{typePrettier(type)}</span>
					<span>{milagePrettier(mileage)} km</span>
				</div>
				<MainButton
					to={`/catalog/${id}`}
					title='Read More'
					className='readButton'
				/>
			</li>
		</>
	)
}

export default CarItem
