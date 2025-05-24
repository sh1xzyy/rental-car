import type { FC } from 'react'
import type { ActionButtonProps } from '../../interfaces/General/ActionButton/ActionButtonProps'
import s from './ActionButton.module.css'

const ActionButton: FC<ActionButtonProps> = ({
	className,
	title,
	type,
	event,
	children,
}) => {
	return (
		<button className={s[className]} type={type} onClick={event}>
			{title}
			{children}
		</button>
	)
}

export default ActionButton
