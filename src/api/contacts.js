import axios from "axios"
import { API_BASE } from "utils/constants"
import qs from "qs";

export const getContacts = ({ id, params }) => {
	return axios.get(
			`${API_BASE}/passenger${id ? '/' + id : ''}?${qs.stringify(params)}`
		)
		.then(res => res.data)
}