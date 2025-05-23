import { NumericFormat } from 'react-number-format'
import { useField } from 'formik'
import type { FC } from 'react'
import type { FormattedMileageInputProps } from '../../interfaces/CatalogPage/CatalogSearchTools/FormattedMileageInputProps'
import s from './FormattedMileageInput.module.css'

const FormattedMileageInput: FC<FormattedMileageInputProps> = ({
	name,
	className,
}) => {
	const [field, , helpers] = useField(name)
	const value = field.value || ''

	return (
		<NumericFormat
			thousandSeparator=','
			allowNegative={false}
			valueIsNumericString
			value={value}
			onValueChange={values => {
				helpers.setValue(values.value)
			}}
			className={className ? s[className] : undefined}
		/>
	)
}

export default FormattedMileageInput
