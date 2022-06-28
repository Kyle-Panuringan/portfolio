import Navbar from "./components/navbar/Navbar";
import NavbarMini from "./components/navbarMini/NavbarMini";
import Main from "./components/main/Main";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoConstructSharp } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";

function App() {
	const icons = {
		AiFillHome: AiFillHome,
		BsFillPersonFill: BsFillPersonFill,
		IoConstructSharp: IoConstructSharp,
		RiContactsBook2Fill: RiContactsBook2Fill,
	};
	return (
		<div>
			<NavbarMini icons={icons} />
			<Navbar icons={icons} />
			<Main />
		</div>
	);
}

export default App;
