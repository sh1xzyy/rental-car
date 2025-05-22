import type { FC } from 'react'
import type { ContainerProps } from '../../interfaces/General/Container/Container'
import s from './Container.module.css'

const Container: FC<ContainerProps> = ({ children }) => {
	return <div className={s.container}>{children}</div>
}

export default Container
