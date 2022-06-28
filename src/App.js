import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
