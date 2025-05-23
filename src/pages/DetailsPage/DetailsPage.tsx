import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useEffect, useRef, type FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import CarSpecifications from '../../components/CarSpecifications/CarSpecifications'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import { selectCarDetails, selectIsLoading } from '../../redux/cars/selector'
import DetailsForm from '../../components/DetailsForm/DetailsForm'
import { getCarDetailsByIdThunk } from '../../redux/cars/options'
import CarDetails from '../../components/CarDetails/CarDetails'
import Container from '../../components/Container/Container'
import CarImage from '../../components/CarImage/CarImage'
import CarInfo from '../../components/CarInfo/CarInfo'
import Section from '../../components/Section/Section'
import type { AppDispatch } from '../../redux/store'
import Loader from '../../components/Loader/Loader'
import s from './DetailsPage.module.css'

const DetailsPage: FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const carDetails = useSelector(selectCarDetails)
	const isLoading = useSelector(selectIsLoading)
	const location = useLocation()
	const backLink = useRef(location.state?.from ?? '/catalog')
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id) await dispatch(getCarDetailsByIdThunk(id)).unwrap()
			} catch (error) {
				toast.error('Failed to load car details')
			}
		}
		fetchData()
	}, [dispatch, id])

	if (isLoading) {
		return <Loader />
	}

	return (
		<Section className='detailsPageSection'>
			<Container>
				<NavigationButton to={backLink.current} className='goBackButton'>
					<FaArrowLeftLong color='#ffffff' size={16} />
				</NavigationButton>
				<div className={s.detailsWrapper}>
					<div className={s.leftSide}>
						<CarImage carDetails={carDetails} />
						<DetailsForm />
					</div>
					<div className={s.rightSide}>
						<CarDetails carDetails={carDetails} />
						<div className={s.infoWrapper}>
							<CarInfo
								title='Rental Conditions:'
								list={carDetails?.rentalConditions}
							/>
							<CarSpecifications carDetails={carDetails} />
							<CarInfo
								title='Accessories and functionalities:'
								list={carDetails?.functionalities}
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default DetailsPage
