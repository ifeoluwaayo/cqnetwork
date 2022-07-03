export default function Custom404() {
	return <div>Redirecting...</div>;
}

export const getStaticProps = () => {
	return {
		redirect: {
			destination: "/",
		},
	};
};
