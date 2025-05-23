import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required'),
})
