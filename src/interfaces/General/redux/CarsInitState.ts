import type { Option } from '../../CatalogPage/Selector/Option'
import type { CarData } from './CarData'

export interface CarsInitState {
	brands: Option[]
	cars: CarData[]
	carDetails: CarData | null
	totalPages: number
	isLoading: boolean
}
