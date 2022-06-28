import Layout from "../components/Layout";
import { useTranslations } from "use-intl";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import TokenomicsSection from "../components/sections/TokenomicsSection";
import EcosystemSection from "../components/sections/EcosystemSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import SocialSection from "../components/sections/SocialSection";

export default function Home() {
	const t = useTranslations("welcome");

	return (
		<Layout className="">
			<HeroSection />
			<AboutSection />
			<TokenomicsSection />
			<EcosystemSection />
			<RoadmapSection />
			<SocialSection />
		</Layout>
	);
}

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../lang/${locale}.json`),
		},
	};
}
