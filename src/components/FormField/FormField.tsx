import { Field } from 'formik'
import type { FC } from 'react'
import s from './FormField.module.css'
import { nanoid } from '@reduxjs/toolkit'
import type { FormFieldProps } from '../../interfaces/General/FormField/FormField'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

const FormField: FC<FormFieldProps> = ({
	className,
	as,
	type,
	name,
	min,
	placeholder,
	errorMsg = true,
	title,
}) => {
	const fieldId = nanoid()

	return (
		<>
			<label htmlFor={fieldId}></label>
			<Field
				className={s[className]}
				as={as}
				type={type}
				name={name}
				min={min}
				id={fieldId}
				placeholder={placeholder}
				title={title}
			/>
			{errorMsg && <ErrorMsg name={name} />}
		</>
	)
}

export default FormField
