import type { FC } from 'react'
import s from './MainButton.module.css'
import { Link } from 'react-router-dom'

interface MainButtonProps {
	to: string
	title: string
}

const MainButton: FC<MainButtonProps> = ({ to, title }) => {
	return (
		<Link to={to} className={s.viewButton}>
			{title}
		</Link>
	)
}

export default MainButton
