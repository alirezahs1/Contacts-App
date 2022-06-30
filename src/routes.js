import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

export default function() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	)
}