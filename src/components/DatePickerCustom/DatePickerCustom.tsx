import DatePicker, { registerLocale } from 'react-datepicker'
import type { FC } from 'react'
import type { DatePickerCustomProps } from '../../interfaces/DetailsPage/DatePickerCustom/DatePickerCustomProps'
import { isBeforeToday } from '../../utils/datePicker/isBeforeToday'
import { customLocale } from '../../utils/datePicker/customLocale'
import 'react-datepicker/dist/react-datepicker.css'
import s from './DatePickerCover.module.css'
import './DatePickerCustom.css'

const DatePickerCustom: FC<DatePickerCustomProps> = ({
	selectedDate,
	hasUserPickedDate,
	handleDateChange,
}) => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)

	registerLocale('custom-en', customLocale)
	return (
		<>
			<DatePicker
				className={s.datePicker}
				dateFormat='dd/MM/yyyy'
				locale='custom-en'
				selected={hasUserPickedDate ? selectedDate : null}
				onChange={(date: Date | null) => {
					if (date) {
						handleDateChange(date)
					}
				}}
				placeholderText='Booking date'
				title='dd/mm/yyyy'
				minDate={today}
				dayClassName={(date: Date) =>
					isBeforeToday(date, today) ? 'disabled-date' : ''
				}
			/>
		</>
	)
}

export default DatePickerCustom
