import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { NavigationButtonProps } from '../../interfaces/General/NavigationButton/NavigationButtonProps'
import s from './NavigationButton.module.css'

const NavigationButton: FC<NavigationButtonProps> = ({
	to,
	title,
	className = 'viewButton',
}) => {
	return (
		<Link to={to} className={s[className]}>
			{title}
		</Link>
	)
}

export default NavigationButton
