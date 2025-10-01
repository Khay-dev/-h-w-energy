import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/Scroll";
import Contact from "./pages/Contact";
import PartnersPage from "./pages/Partners";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ourassets" element={<Assets />} />
				<Route path="/about" element={<About />} />
				<Route path="/service" element={<Service />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/partners" element={<PartnersPage />} />
			</Routes>
		</Router>
	);
}

export default App;
