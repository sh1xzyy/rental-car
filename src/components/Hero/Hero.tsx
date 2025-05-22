import type { FC } from 'react'
import s from './Hero.module.css'
import MainButton from '../NavigationButton/NavigationButton'

const Hero: FC = () => {
	return (
		<div className={s.hero}>
			<div className={s.textWrapper}>
				<h1 className={s.title}>Find your perfect rental car</h1>
				<p className={s.description}>
					Reliable and budget-friendly rentals for any journey
				</p>
				<MainButton to='/catalog' title='View Catalog' />
			</div>
		</div>
	)
}

export default Hero
