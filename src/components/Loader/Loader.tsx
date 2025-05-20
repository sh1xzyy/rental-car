import type { FC } from 'react'
import s from './Loader.module.css'
import { HashLoader } from 'react-spinners'

const Loader: FC = () => {
	return (
		<div className={s.loaderWrapper}>
			<HashLoader color='#3470ff' size={24} />
		</div>
	)
}

export default Loader
