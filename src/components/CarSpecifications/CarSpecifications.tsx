import { RiGasStationFill } from 'react-icons/ri'
import { BsCarFront } from 'react-icons/bs'
import { LuSettings } from 'react-icons/lu'
import type { FC } from 'react'
import type { CarDetailsProps } from '../../interfaces/DetailsPage/CarDetailsProps/CarDetailsProps'
import s from './CarSpecifications.module.css'

const CarSpecifications: FC<CarDetailsProps> = ({ carDetails }) => {
	if (!carDetails) return null

	const { year, type, fuelConsumption, engineSize } = carDetails

	return (
		<div className={s.specificationsWrapper}>
			<h3 className={s.title}>Car Specifications:</h3>
			<ul className={s.specificationsList}>
				<li className={s.specificationItem}>
					<svg width={16} height={16}>
						<use href='/icons/icons.svg#icon-calendar'></use>
					</svg>
					<span>Year: {year}</span>
				</li>
				<li className={s.specificationItem}>
					<BsCarFront />
					<span>Type: {type}</span>
				</li>
				<li className={s.specificationItem}>
					<RiGasStationFill />
					<span>Fuel Consumption: {fuelConsumption}</span>
				</li>
				<li className={s.specificationItem}>
					<LuSettings />
					<span>Engine Size: {engineSize}</span>
				</li>
			</ul>
		</div>
	)
}

export default CarSpecifications
