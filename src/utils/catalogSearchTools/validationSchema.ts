import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	brand: Yup.string().required('Required'),
	rentalPrice: Yup.string().required('Required'),
	minMileage: Yup.string().required('Required'),
	maxMileage: Yup.string().required('Required'),
})
