import type { FC } from 'react'
import NavigationButton from '../NavigationButton/NavigationButton'
import s from './NotFound.module.css'

const NotFound: FC = () => {
	return (
		<div className={s.notFoundWrapper}>
			<span className={s.title}>404</span>
			<p className={s.subTitle}>You took a wrong turn, driver</p>
			<p className={s.description}>
				Looks like this page doesn't exist. Go back to the main road!
			</p>
			<img src='/minicar/minicar.gif' alt='Car' className={s.img} />
			<NavigationButton to='/' className='goHomeButton' title='Go Back' />
		</div>
	)
}

export default NotFound
