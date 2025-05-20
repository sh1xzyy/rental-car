import type { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './AppBar.module.css'
import clsx from 'clsx'

const AppBar: FC = () => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		clsx(s.navLink, isActive && s.active)
	return (
		<header className={s.header}>
			<div className='container'>
				<nav className={s.nav}>
					<Link className={s.logo} to='/'>
						Rental<span>Car</span>
					</Link>
					<ul className={s.navList}>
						<li className={s.navItem}>
							<NavLink className={setActive} to='/'>
								Home
							</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink className={setActive} to='/catalog'>
								Catalog
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default AppBar
