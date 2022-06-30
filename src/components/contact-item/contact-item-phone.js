import { PropTypes } from "prop-types";

/**
 * Showing contact's phone number in ContactItem component.
 */
export default function ContactItemPhone({className, phone, ...rest}) {
	
	return (
		<div className={`
				flex-1
				ml-4
				border-l pl-4
				text-slate-700
				text-right
				${className || ''}
			`}>
				{phone}
		</div>
	)
}

ContactItemPhone.propTypes = {
	className: PropTypes.string,
	/** Contact's phone */
	phone: PropTypes.string,
}

ContactItemPhone.defaultProps = {
	className: '',
	phone: '',
}