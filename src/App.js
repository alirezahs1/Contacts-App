import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import React from "react";

/** global styles */
import "./assets/styles/globals.css"

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
