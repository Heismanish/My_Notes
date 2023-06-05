import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Pages/Navbar";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: { refetchOnWindowFocus: false },
		},
	});

	return (
		<>
			<QueryClientProvider client={client}>
				<Router>
					<Navbar></Navbar>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="*" element={<h2>Page not found</h2>}></Route>
					</Routes>
				</Router>
			</QueryClientProvider>
		</>
	);
}

export default App;
