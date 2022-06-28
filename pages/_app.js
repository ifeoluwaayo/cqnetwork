import { NextIntlProvider } from "next-intl";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [showing, setShowing] = useState(false);

	useEffect(() => {
		setShowing(true);
	}, []);

	if (!showing) {
		return null;
	}

	if (typeof window === "undefined") {
		return <></>;
	} else {
		return (
			<NextIntlProvider messages={pageProps.messages}>
				<Component {...pageProps} />
			</NextIntlProvider>
		);
	}
}

export default MyApp;
