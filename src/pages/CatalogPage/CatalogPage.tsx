import { useEffect, type FC } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import CatalogSearchTools from '../../components/CatalogSearchTools/CatalogSearchTools'
import { getCarsByQueryThunk } from '../../redux/cars/options'
import Container from '../../components/Container/Container'
import CarList from '../../components/CarList/CarList'
import Section from '../../components/Section/Section'
import type { AppDispatch } from '../../redux/store'

const CatalogPage: FC = () => {
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getCarsByQueryThunk({ replace: true })).unwrap()
			} catch (error) {
				toast.error('Sorry, something went wrong with uploading data.')
			}
		}
		fetchData()
	}, [dispatch])

	return (
		<>
			<Section className='searchSection'>
				<Container>
					<CatalogSearchTools />
				</Container>
			</Section>
			<Section className='carListSection'>
				<Container>
					<CarList />
				</Container>
			</Section>
		</>
	)
}

export default CatalogPage
