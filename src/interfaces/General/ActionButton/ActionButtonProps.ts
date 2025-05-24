export interface ActionButtonProps {
	className: string
	title?: string
	type: 'submit' | 'button'
	event?: () => void
	children?: React.ReactElement
}
