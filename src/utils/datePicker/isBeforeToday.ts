export const isBeforeToday = (date: Date, today: Date) => {
	const compareDate = new Date(date)
	compareDate.setHours(0, 0, 0, 0)
	return compareDate < today
}
