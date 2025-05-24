import { Link, NavLink } from 'react-router-dom'
import type { FC } from 'react'
import { setActive } from '../../utils/appBar/setActiveColor'
import Container from '../Container/Container'
import s from './AppBar.module.css'

const AppBar: FC = () => {
	return (
		<header className={s.header}>
			<Container>
				<nav className={s.nav}>
					<Link className={s.logo} to='/'>
						Rental<span>Car</span>
					</Link>
					<ul className={s.navList}>
						<li className={s.navItem}>
							<NavLink
								className={isActive => setActive(isActive, s)}
								to='/'
								end
							>
								Home
							</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink
								className={isActive => setActive(isActive, s)}
								to='/catalog'
								end
							>
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
