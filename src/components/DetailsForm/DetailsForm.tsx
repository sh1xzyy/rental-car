import { Formik, Form, type FormikHelpers } from 'formik'
import { useState, type FC } from 'react'
import toast from 'react-hot-toast'
import type { InitValuesDetailsForm } from '../../interfaces/DetailsPage/DetailsForm/DetailsForm'
import { validationSchema } from '../../utils/detailsForm/validationSchema'
import DatePickerCustom from '../DatePickerCustom/DatePickerCustom'
import FormField from '../FormField/FormField'
import s from './DetailsForm.module.css'
import Loader from '../Loader/Loader'

const DetailsForm: FC = () => {
	const [hasUserPickedDate, setHasUserPickedDate] = useState(false)
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [isLoading, setIsLoading] = useState(false)

	const initialValues: InitValuesDetailsForm = {
		name: '',
		email: '',
		comment: '',
	}

	const handleSubmit = (
		_: InitValuesDetailsForm,
		actions: FormikHelpers<InitValuesDetailsForm>
	) => {
		setIsLoading(true)
		setTimeout(() => {
			toast.success(
				'Your rental request was successful! We will contact you shortly to confirm the details.'
			)
			setIsLoading(false)
		}, 1000)
		actions.resetForm()
	}

	const handleDateChange = (date: Date) => {
		setSelectedDate(date)
		setHasUserPickedDate(true)
	}

	return (
		<>
			{isLoading && <Loader />}
			<div className={s.formWrapper}>
				<div className={s.descriptionWrapper}>
					<h3 className={s.title}>Book your car now</h3>
					<p className={s.description}>
						Stay connected! We are always ready to help you.
					</p>
				</div>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<Form>
						<div className={s.fieldsWrapper}>
							<div className={s.fieldWrapper}>
								<FormField
									className='detailsField'
									type='text'
									name='name'
									placeholder='Name*'
								/>
							</div>
							<div className={s.fieldWrapper}>
								<FormField
									className='detailsField'
									type='email'
									name='email'
									placeholder='Email*'
									title='example@gmail.com'
								/>
							</div>
							<div className={s.fieldWrapper}>
								<DatePickerCustom
									selectedDate={selectedDate}
									hasUserPickedDate={hasUserPickedDate}
									handleDateChange={handleDateChange}
								/>
							</div>
							<div className={s.fieldWrapper}>
								<FormField
									className='textAreaDetailsField'
									as='textarea'
									name='comment'
									placeholder='Comment'
									errorMsg={false}
								/>
							</div>
						</div>
						<button className={s.submitButton} type='submit'>
							Send
						</button>
					</Form>
				</Formik>
			</div>
		</>
	)
}

export default DetailsForm
