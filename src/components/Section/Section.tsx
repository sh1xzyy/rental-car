import type { FC } from 'react'
import s from './Section.module.css'
import type { SectionProps } from '../../interfaces/General/Section/Section'

const Section: FC<SectionProps> = ({ className, children }) => {
	return <section className={s[className]}>{children}</section>
}

export default Section
