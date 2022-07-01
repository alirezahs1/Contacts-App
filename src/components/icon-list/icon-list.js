import IconListItem from "./icon-list-item"

export default function IconList({className, children, ...rest}){
	return (
		<ul
			className={`
				
				${className || ''}
			`}
		>
			{children}
		</ul>
	)
}

IconList.Item = IconListItem