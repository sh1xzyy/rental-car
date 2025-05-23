import { Formik, Form, type FormikHelpers } from 'formik'
import { useSelector } from 'react-redux'
import { type FC } from 'react'
import type { initCatalogSearchTools } from '../../interfaces/CatalogPage/CatalogSearchTools/initCatalogSearchTools'
import { validationSchema } from '../../utils/catalogSearchTools/validationSchema'
import FormattedMileageInput from '../FormattedMileageInput/FormattedMileageInput'
import { initialValues } from '../../utils/catalogSearchTools/initialValues'
import CustomSelector from '../CustomSelector/CustomSelector'
import { selectIsLoading } from '../../redux/cars/selector'
import { useSearchCars } from '../../hooks/useSearchCars'
import ActionButton from '../ActionButton/ActionButton'
import s from './CatalogSearchTools.module.css'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import Loader from '../Loader/Loader'

const CatalogSearchTools: FC = () => {
	const { searchCars } = useSearchCars()
	const isLoading = useSelector(selectIsLoading)

	const handleSubmit = async (
		query: initCatalogSearchTools,
		actions: FormikHelpers<initCatalogSearchTools>
	) => {
		await searchCars(query)
		actions.resetForm()
	}

	return (
		<>
			{isLoading && <Loader />}
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ setFieldValue, values }) => (
					<Form className={s.searchForm}>
						<div className={s.fieldsWrapper}>
							<div className={s.fieldWrapper}>
								<label>
									<span className={s.fieldLabel}>Car brand</span>
									<CustomSelector
										placeholder='Choose a brand'
										name='brand'
										value={values.brand}
										setFieldValue={setFieldValue}
										width='204px'
										height='272px'
									/>
									<ErrorMsg name='brand' />
								</label>
							</div>
							<div className={s.fieldWrapper}>
								<label>
									<span className={s.fieldLabel}>Price/ 1 hour</span>
									<CustomSelector
										placeholder='Choose a price'
										name='rentalPrice'
										value={values.rentalPrice}
										setFieldValue={setFieldValue}
										width='196px'
										height='188px'
									/>
									<ErrorMsg name='rentalPrice' />
								</label>
							</div>
							<label>
								<span className={s.fieldLabel}>Сar mileage / km</span>
								<div className={s.rangeFieldsWrapper}>
									<div className={s.fieldWrapper}>
										<span className={s.fieldPrefix}>From</span>
										<FormattedMileageInput
											name='minMileage'
											className='rangeFieldFrom'
										/>
										<ErrorMsg name='minMileage' />
									</div>
									<div className={s.fieldWrapper}>
										<span className={s.fieldPrefix}>To</span>
										<FormattedMileageInput
											name='maxMileage'
											className='rangeFieldTo'
										/>
										<ErrorMsg name='maxMileage' />
									</div>
								</div>
							</label>
						</div>
						<ActionButton className='searchButton' title='Search' />
					</Form>
				)}
			</Formik>
		</>
	)
}

export default CatalogSearchTools
