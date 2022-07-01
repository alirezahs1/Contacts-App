import { Route, Routes } from "react-router-dom";
import { ContactDetailPage } from "./pages/contact-detail";
import { HomePage } from "./pages/home";

export default function() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/:id/" element={<ContactDetailPage />} />
		</Routes>
	)
}