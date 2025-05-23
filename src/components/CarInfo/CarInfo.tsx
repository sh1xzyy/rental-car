import type { FC } from 'react'
import s from './CarInfo.module.css'
import { FaRegCircleCheck } from 'react-icons/fa6'
import type { CarInfoProps } from '../../interfaces/DetailsPage/CarInfo/CarInfo'

const CarInfo: FC<CarInfoProps> = ({ title, list }) => {
	return (
		<div className={s.infoWrapper}>
			<h3 className={s.title}>{title}</h3>
			<ul className={s.infoList}>
				{list?.map((item, index) => {
					return (
						<li key={index} className={s.infoItem}>
							<FaRegCircleCheck />
							<span>{item}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default CarInfo
