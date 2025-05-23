import { type FC } from 'react'
import s from './CarItem.module.css'
import { favoriteIconColorChange } from '../../utils/carItem/favoriteIconColorChange'
import { useFavoriteLocalStorage } from '../../hooks/useFavoriteLocaleStorage'
import { selectingAddress } from '../../utils/carItem/selectingAddress'
import { milagePrettier } from '../../utils/carItem/mileagePrettier'
import type { CarProps } from '../../interfaces/CatalogPage/Car/Car'
import { typePrettier } from '../../utils/carItem/typePrettier'
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
	const { isFavorite, toggleFavorite } = useFavoriteLocalStorage(id)

	return (
		<li className={s.carItem}>
			<div className={s.imgWrapper}>
				<img className={s.img} src={img} alt={description} loading='lazy' />
				<button
					className={s.favoriteButton}
					type='button'
					onClick={toggleFavorite}
				>
					<svg
						className={favoriteIconColorChange(s, isFavorite)}
						width={16}
						height={16}
					>
						<use href='/icons/icons.svg#icon-heart'></use>
					</svg>
				</button>
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
	)
}

export default CarItem
