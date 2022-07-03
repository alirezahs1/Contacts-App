import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/**
 * Show the recent contact name and a link to the contact's page.
 */
export default function RecentContact({id, name}) {
	return (
		<Link className="mx-2 text-gray-600 hover:text-gray-800" to={`/${id}/`}>
			<FontAwesomeIcon className="w-3 h-3 mr-1" icon={faClock} />
			{name}
		</Link>
	)
}