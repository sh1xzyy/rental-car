import type { FC } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { components, type DropdownIndicatorProps } from 'react-select'
import type { Option } from '../../interfaces/CatalogPage/Selector/Option'

const DropdownIndicator: FC<DropdownIndicatorProps<Option, false>> = props => {
	return (
		<components.DropdownIndicator {...props}>
			<SlArrowDown size={16} color='#101828' />
		</components.DropdownIndicator>
	)
}

export default DropdownIndicator
