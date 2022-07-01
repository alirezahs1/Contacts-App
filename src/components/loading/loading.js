import PropTypes from 'prop-types'

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Loading spinner icon
 */
export default function Loading({className, children, ...rest}) {
	return (
		<div 
			className={`
				flex items-center justify-center
				h-32
				text-slate-700
				${className || ''}
			`}
			{...rest}
			>
				<FontAwesomeIcon className="w-6 h-6" icon={faSpinner} pulse />
				{children && (
					<div className="ml-3">{children}</div>
				)}
			</div>
	)
}

Loading.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}