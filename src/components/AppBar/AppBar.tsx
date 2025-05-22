import { Link, NavLink } from 'react-router-dom'
import type { FC } from 'react'
import clsx from 'clsx'
import Container from '../Container/Container'
import s from './AppBar.module.css'

const AppBar: FC = () => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		clsx(s.navLink, isActive && s.active)

	return (
		<header className={s.header}>
			<Container>
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
			</Container>
		</header>
	)
}

export default AppBar
