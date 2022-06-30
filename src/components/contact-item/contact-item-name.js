import { PropTypes } from "prop-types";

/**
 * Showing contact's name  in ContactItem component.
 */
export default function ContactItemName({className, name, ...rest}) {
	
	return (
		<div className={`
				font-semibold flex-1
				${className || ''}
			`}>
				{name}
		</div>
	)
}

ContactItemName.propTypes = {
	className: PropTypes.string,
	/** Contact's name */
	name: PropTypes.string,
}

ContactItemName.defaultProps = {
	className: '',
	name: ''
}