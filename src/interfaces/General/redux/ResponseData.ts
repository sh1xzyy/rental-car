import type { CarData } from './CarData'

export interface ResponseData {
	cars: CarData[]
	totalPages: number
}
