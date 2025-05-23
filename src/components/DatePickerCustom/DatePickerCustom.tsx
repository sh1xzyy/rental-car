import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { enUS } from 'date-fns/locale/en-US'
import type { FC } from 'react'
import type { DatePickerCustomProps } from '../../interfaces/DetailsPage/DatePickerCustom/DatePickerCustomProps'
import s from './DatePickerCover.module.css'
import './DatePickerCustom.css'

const DatePickerCustom: FC<DatePickerCustomProps> = ({
	selectedDate,
	hasUserPickedDate,
	handleDateChange,
}) => {
	const customDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

	const customLocale = {
		...enUS,
		localize: {
			...enUS.localize,
			day: (n: number) => customDayNames[n],
		},
		options: {
			...enUS.options,
			weekStartsOn: 1,
		} as const,
	}
	registerLocale('custom-en', customLocale)

	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const isBeforeToday = (date: Date) => {
		const compareDate = new Date(date)
		compareDate.setHours(0, 0, 0, 0)
		return compareDate < today
	}

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
					isBeforeToday(date) ? 'disabled-date' : ''
				}
			/>
		</>
	)
}

export default DatePickerCustom
