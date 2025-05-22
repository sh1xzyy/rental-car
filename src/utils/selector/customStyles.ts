import { type StylesConfig } from 'react-select'
import type { Option } from '../../interfaces/CatalogPage/Selector/Option'

export const customStyles: StylesConfig<Option> = {
	control: provided => ({
		...provided,
		width: '204px',
		height: '44px',
		paddingLeft: '16px',
		border: 'none',
		borderRadius: '12px',
		backgroundColor: ' #f7f7f7',
	}),
	option: (provided, state) => ({
		...provided,
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: '#8d929a',
		backgroundColor: state.isSelected ? '#DADDE1' : '#fff',
		'&:hover': {
			backgroundColor: '#F2F4F7',
		},
	}),
	menu: provided => ({
		...provided,
		width: '204px',
	}),
	placeholder: provided => ({
		...provided,
		fontweight: 500,
		fontsize: '16px',
		lineHeight: 1.25,
		color: '#101828',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: () => ({
		position: 'absolute',
		top: '50%',
		right: '16px',
		transform: 'translateY(-50%)',
	}),
}
