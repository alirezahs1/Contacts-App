import { IconListItemIcon } from "./icon-list-item-icon"

export const IconListItem = ({className, icon, children, ...rest}) => {
	return (
		<li
			className={`
				flex items-center
				mb-6 last:mb-0
				${className || ''}
			`}
			{...rest}
		>
			{icon && 
				<IconListItemIcon icon={icon} />
			}

			{children}
		</li>
	)
}