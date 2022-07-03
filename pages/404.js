import { useTranslations } from "use-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import NotFound from "../assets/not-found.svg";

export default function Custom404() {
	const { t } = useTranslations("404");
	const router = useRouter();

	useEffect(() => {
		router.replace("/");
	});

	return (
		<div className="flex items-center justify-center w-full h-screen flex-col bg-slate-50">
			<Image src={NotFound} alt="404" width={300} height={300} />
			<h1 className="animate-ping">Redirecting...</h1>
		</div>
	);
}

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: require(`../lang/${locale}.json`),
			fallback: true,
		},
	};
};
