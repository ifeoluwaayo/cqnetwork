import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
	return (
		<ScrollToTop>
			<Header />
			{children}
			<Footer />
		</ScrollToTop>
	);
};

export default Layout;
