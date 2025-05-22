import type { FC } from 'react'
import type { ActionButtonProps } from '../../interfaces/General/ActionButton/ActionButtonProps'
import s from './ActionButton.module.css'

const ActionButton: FC<ActionButtonProps> = ({ className, title, event }) => {
	return (
		<button className={s[className]} type='submit' onClick={event}>
			{title}
		</button>
	)
}

export default ActionButton
