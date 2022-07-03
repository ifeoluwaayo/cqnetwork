import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Custom404() {
	const { t } = useTranslation();

	return <div>Redirecting...</div>;
}

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common"])),
		},
		redirect: {
			destination: "/",
		},
	};
};
