import { PropTypes } from "prop-types";

import ContactItemAddress from "./contact-item-address";
import ContactItemAvatar from "./contact-item-avatar";
import ContactItemName from "./contact-item-name";
import ContactItemPhone from "./contact-item-phone";


/**
 * Simple card for showing general contact information.
 * including avatar, name, phone and address.
 */
export default function ContactItem({ className, name, avatar, phone, address, ...rest }) {
	
	return (
		<div className={`
				flex items-center
				bg-white shadow-sm  hover:shadow-lg 
				hover:scale-105
				active:scale-100
				transition-all duration-300
				rounded-3xl
				p-4
				${className || ''}
			`}>
				<ContactItemAvatar src={avatar} alt={name} randomBGIndex={name.charCodeAt(0)} />
				<div className="flex flex-wrap ml-4 flex-1">
					<ContactItemName name={name} />
					<ContactItemPhone phone={phone} />
					{address && (
						<ContactItemAddress address={address} />
					)}
				</div>
		</div>
	)
}

ContactItem.propTypes = {
	/** @ignore */
	className: PropTypes.string,
	/** Contact's name */
	name: PropTypes.string.isRequired,
	/** Contact's avatar url */
	avatar: PropTypes.string,
	/** Contact's phone */
	phone: PropTypes.string,
	/** Contact's address */
	address: PropTypes.string,
}

ContactItem.defaultProps = {
	className: '',
	avatar: '',
	phone: '',
	address: '',
}