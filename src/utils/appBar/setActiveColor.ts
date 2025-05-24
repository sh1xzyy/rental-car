import clsx from 'clsx'

export const setActive = (
	{ isActive }: { isActive: boolean },
	s: CSSModuleClasses
) => clsx(s.navLink, isActive && s.active)
