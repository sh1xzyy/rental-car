import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'))
const DetailsPage = lazy(() => import('../../pages/DetailsPage/DetailsPage'))
import Loader from '../Loader/Loader'
import Layout from '../Layout/Layout'

function App() {
	return (
		<>
			<Layout />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/catalog' element={<CatalogPage />} />
					<Route path='/catalog/:id' element={<DetailsPage />} />
					<Route path='*' element={<DetailsPage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
