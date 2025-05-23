import { createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit'
import {
	getBrandThunk,
	getCarDetailsByIdThunk,
	getCarsByQueryThunk,
} from './options'
import type { CarsInitState } from '../../interfaces/General/redux/CarsInitState'
import type { CarData } from '../../interfaces/General/redux/CarData'

const initialState: CarsInitState = {
	brands: [],
	cars: [],
	carDetails: null,
	totalPages: 0,
	isLoading: false,
}

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(
				getBrandThunk.fulfilled,
				(state, action: PayloadAction<string[]>) => {
					state.brands = action.payload.map((brand: string) => ({
						value: brand,
						label: brand,
					}))
					state.isLoading = false
				}
			)
			.addCase(
				getCarDetailsByIdThunk.fulfilled,
				(state, action: PayloadAction<CarData>) => {
					state.carDetails = action.payload
					state.isLoading = false
				}
			)
			.addCase(getCarsByQueryThunk.fulfilled, (state, action) => {
				const replace = action.meta.arg.replace

				if (replace) {
					state.cars = action.payload.cars
				} else {
					state.cars.push(...action.payload.cars)
				}
				state.isLoading = false
				state.totalPages = action.payload.totalPages
			})

			.addMatcher(
				isAnyOf(
					getBrandThunk.pending,
					getCarsByQueryThunk.pending,
					getCarDetailsByIdThunk.pending
				),
				state => {
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					getBrandThunk.rejected,
					getCarsByQueryThunk.rejected,
					getCarDetailsByIdThunk.rejected
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

export default carsSlice.reducer
