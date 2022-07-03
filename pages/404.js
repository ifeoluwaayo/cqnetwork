import { useTranslations } from "use-intl";

export default function Custom404() {
	const { t } = useTranslations();

	return <div>Redirecting...</div>;
}

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: require(`../lang/${locale}.json`),
		},
		redirect: {
			destination: "/",
		},
	};
};
