import Select, { type SingleValue } from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, type FC } from 'react'
import toast from 'react-hot-toast'
import type { CustomSelectorProps } from '../../interfaces/CatalogPage/CustomSelector/CustomSelectorProps'
import DropdownIndicator from '../DropDownIndicator/DropDownIndicator'
import { customStyles } from '../../utils/selector/customStyles'
import { selectCarBrands } from '../../redux/cars/selector'
import { getBrandThunk } from '../../redux/cars/options'
import { price } from '../../utils/selector/priceOption'
import type { AppDispatch } from '../../redux/store'

const CustomSelector: FC<CustomSelectorProps> = ({
	placeholder,
	name,
	value,
	setFieldValue,
}) => {
	const dispatch: AppDispatch = useDispatch()
	const brands = useSelector(selectCarBrands)

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (name === 'brand') {
					await dispatch(getBrandThunk()).unwrap()
				}
			} catch (error) {
				toast.error('Something went wrong with uploading brands')
			}
		}
		fetchData()
	}, [dispatch, name])

	const handleChange = (
		option: SingleValue<{ value: string; label: string }>
	) => {
		setFieldValue(name, option?.value ?? '')
	}

	const options = name === 'brand' ? brands : price
	const selectedOption = options.find(option => option.value === value) || null

	return (
		<Select
			options={options}
			value={selectedOption}
			styles={customStyles}
			placeholder={placeholder}
			components={{ DropdownIndicator }}
			onChange={handleChange}
		/>
	)
}

export default CustomSelector
