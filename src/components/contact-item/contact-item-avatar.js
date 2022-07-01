import { PropTypes } from "prop-types";

/**
 * Avatar component for using in ContactItem component.
 */
export default function ContactItemAvatar({className, src, randomBGIndex, size, ...rest}) {

	const BGColorClassNames = ['bg-red-400', 'bg-emerald-400', 'bg-sky-400'];

	const bgClassName = randomBGIndex > -1 ? BGColorClassNames[randomBGIndex % BGColorClassNames.length] : '';
	
	return (
		<div className={`
				flex items-center justify-center 
				rounded-full
				${bgClassName}
				${className || ''}
			`}
			style={{
				width: size + 'px',
				height: size + 'px'
			}}
			>
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
	randomBGIndex: PropTypes.number,
	/** size of image (width and height) */
	size: PropTypes.number,
}

ContactItemAvatar.defaultProps = {
	className: '',
	src: '',
	randomBGIndex: 0,
	size: 64
}