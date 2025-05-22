import { ErrorMessage } from 'formik'
import type { FC } from 'react'
import s from './ErrorMsg.module.css'

interface ErrorMsgProps {
	name: string
}

const ErrorMsg: FC<ErrorMsgProps> = ({ name }) => {
	return <ErrorMessage className={s.error} name={name} component='span' />
}

export default ErrorMsg
