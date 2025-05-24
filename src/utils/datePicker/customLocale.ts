import { enUS } from 'date-fns/locale/en-US'

const customDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const customLocale = {
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
