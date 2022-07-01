import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./routes";
import React from "react";

/** global styles */
import "assets/styles/globals.css"

const queryClient = new QueryClient();

function App() {
	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default App;
