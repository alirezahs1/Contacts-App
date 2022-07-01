import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconListItemIcon({className, icon, ...rest}){
	return (
		<FontAwesomeIcon 
			className={`
				w-5 h-5
				p-3 mr-3
				bg-teal-50
				text-teal-500
				rounded-full
				${className || ''}
			`}
			icon={icon} 
			{...rest} 
		/>
	)
}