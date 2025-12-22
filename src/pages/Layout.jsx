import {Outlet} from "react-router";
import Header from "../components/header/Header.jsx";

export default function Layout() {
	return (<div className={"bg-achtergrond h-screen"}>
		<Header/>
		<div className="h-screen w-screen z-0">
			<Outlet/>
		</div>

	</div>)
}