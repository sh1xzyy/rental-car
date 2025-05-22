import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { ResponseData } from '../../interfaces/General/redux/ResponseData'
import type { RequestData } from '../../interfaces/General/redux/RequestData'
import type { CarData } from '../../interfaces/General/redux/CarData'

axios.defaults.baseURL = 'https://car-rental-api.goit.global/'

export const getCarsByQueryThunk = createAsyncThunk<ResponseData, RequestData>(
	'cars/byQuery',
	async (query, thunkApi) => {
		try {
			const response = await axios.get(`/cars`, {
				params: {
					brand: query.brand,
					rentalPrice: query.rentalPrice,
					minMileage: query.minMileage,
					maxMileage: query.maxMileage,
					page: query.page ?? '1',
					limit: '10',
				},
			})
			if (response.data.cars.length === 0) {
				return thunkApi.rejectWithValue('No cars found')
			}
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const getCarDetailsByIdThunk = createAsyncThunk<CarData, string>(
	'cars/details',
	async (id, thunkApi) => {
		try {
			const response = await axios.get(`/cars/${id}`)
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const getBrandThunk = createAsyncThunk('brands', async (_, thunkApi) => {
	try {
		const response = await axios.get('/brands')
		return response.data
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})
