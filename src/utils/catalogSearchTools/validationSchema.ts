import * as Yup from 'yup'

export const validationSchema = Yup.object()
	.shape({
		brand: Yup.string().required('Required'),
		rentalPrice: Yup.string().required('Required'),
		minMileage: Yup.string(),
		maxMileage: Yup.string(),
	})
	.test(
		'mileage-fields-required',
		'At least one of "From" or "To" mileage must be filled',
		function (value) {
			const min = value.minMileage
			const max = value.maxMileage

			if (!min && !max) {
				return this.createError({
					path: 'minMileage',
					message: 'Fill in one of the fields',
				})
			}
			return true
		}
	)
