import { Route, Routes } from "react-router-dom";
import { ContactDetailPage, ContactListPage } from "./pages/contacts";

export default function() {
	return (
		<Routes>
			<Route path="/" element={<ContactListPage />} />
			<Route path="/:id/" element={<ContactDetailPage />} />
		</Routes>
	)
}