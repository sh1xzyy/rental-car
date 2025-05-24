import { type StylesConfig } from 'react-select'
import type { Option } from '../../interfaces/CatalogPage/Selector/Option'

export const customStyles: StylesConfig<Option> = {
	control: provided => ({
		...provided,
		cursor: 'pointer',
		height: '44px',
		paddingLeft: '8px',
		border: 'none',
		borderRadius: '12px',
		backgroundColor: ' #f7f7f7',
		'@media screen and (max-width: 767px)': {
			width: '100%',
		},
	}),
	singleValue: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: '#101828',
	}),
	option: (provided, state) => ({
		...provided,
		display: 'flex',
		alignItems: 'center',
		height: '28px',
		padding: '0 18px',
		cursor: 'pointer',
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: state.isSelected ? '#101828' : '#8d929a',
		backgroundColor: '#fff',
		'&:hover': {
			backgroundColor: '#F2F4F7',
		},
	}),
	menuList: provided => ({
		...provided,
		padding: '14px 0',
		border: '1px solid #f7f7f7',
		borderRadius: '12px',
		boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
		backgroundColor: '#fff',
	}),
	placeholder: provided => ({
		...provided,
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: 1.25,
		color: '#101828',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		pointerEvents: 'none',
		position: 'absolute',
		top: '50%',
		right: '16px',
		transform: `translateY(-50%) ${
			state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
		}`,
		transition: 'transform 0.2s ease',
	}),
}
