import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Root() {
	const { pathname } = useLocation();
	useEffect(() => window.scrollTo(0, 0), [pathname]);
  
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}