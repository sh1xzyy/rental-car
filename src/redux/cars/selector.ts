import type { RootState } from '../store'

export const selectCarBrands = (state: RootState) => state.cars.brands
export const selectCars = (state: RootState) => state.cars.cars
export const selectTotalPages = (state: RootState) => state.cars.totalPages
export const selectCarDetails = (state: RootState) => state.cars.carDetails
export const selectIsLoading = (state: RootState) => state.cars.isLoading
