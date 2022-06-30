import { PropTypes } from "prop-types";

/**
 * Avatar component for using in ContactItem component.
 */
export default function ContactItemAvatar({className, src, randomBG=true, ...rest}) {
	
	const BGColorClassNames = ['bg-red-400', 'bg-emerald-400', 'bg-sky-400'];

	const bgClassName = randomBG ? BGColorClassNames[Math.floor(Math.random() * BGColorClassNames.length)] : '';
	
	return (
		<div className={`
				flex items-center justify-center 
				h-16 w-16
				rounded-full
				${bgClassName}
				${className || ''}
			`}>
				{src && (
					<img className="rounded-full h-full w-full" src={src} {...rest} />
				)}
		</div>
	)
}

ContactItemAvatar.propTypes = {
	className: PropTypes.string,
	/** Contact's avatar url */
	src: PropTypes.string,
	/** Randomize background color */
	randomBG: PropTypes.bool,
}

ContactItemAvatar.defaultProps = {
	className: '',
	src: '',
	randomBG: true,
}