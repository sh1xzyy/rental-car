import clsx from 'clsx'

export const favoriteIconColorChange = (
	s: CSSModuleClasses,
	isFavorite: boolean
) => clsx(s.favoriteIcon, isFavorite && s.favoriteSelected)
