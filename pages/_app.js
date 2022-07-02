/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { NextIntlProvider } from "next-intl";
import { useEffect, useState } from "react";
import Script from "next/script";
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
			<>
				<Script
					src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
					strategy="beforeInteractive"
				/>
				<NextIntlProvider messages={pageProps.messages}>
					<Component {...pageProps} />
				</NextIntlProvider>
			</>
		);
	}
}

export default MyApp;
