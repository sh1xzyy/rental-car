import { Link } from 'react-router-dom'
import type { FC } from 'react'
import type { NavigationButtonProps } from '../../interfaces/General/NavigationButton/NavigationButtonProps'
import s from './NavigationButton.module.css'

const NavigationButton: FC<NavigationButtonProps> = ({
	to,
	title,
	className,
	children,
	state,
}) => {
	return (
		<Link to={to} state={state} className={s[className]}>
			{title}
			{children}
		</Link>
	)
}

export default NavigationButton
