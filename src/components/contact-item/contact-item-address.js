import { PropTypes } from "prop-types";

/**
 * Showing contact's address in ContactItem component.
 */
export default function ContactItemAddress({className, address, ...rest}) {
	
	return (
		<div className={`
				w-full mt-2
				text-sm text-justify
				font-lighter
				text-gray-500
				${className || ''}
			`}>
				{address}
		</div>
	)
}

ContactItemAddress.propTypes = {
	className: PropTypes.string,
	/** Contact's address */
	address: PropTypes.string,
}

ContactItemAddress.defaultProps = {
	className: '',
	address: ''
}