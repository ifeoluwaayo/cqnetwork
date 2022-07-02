import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = ({ children }) => {
	const router = useRouter();
	const location = router.pathname;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return children || null;
};

export default ScrollToTop;
