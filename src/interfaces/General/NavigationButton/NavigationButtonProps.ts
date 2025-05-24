import type { Location as RouterLocation } from 'react-router-dom'

export interface NavigationButtonProps {
	to: string
	title?: string
	className: string
	children?: React.ReactElement
	state?: { from: RouterLocation }
}
