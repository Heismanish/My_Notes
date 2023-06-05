import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Pages/Navbar";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { ContactUs } from "./Pages/ContactUs";
import { Profile } from "./Pages/Profile";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("Manish");
	return (
		<>
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar></Navbar>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="*" element={<h1>Page not found</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</>
	);
}

export default App;
