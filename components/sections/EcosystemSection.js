import React from "react";
import Product from "../Product";

const EcosystemSection = () => {
	return (
		<section className="py-14 mx-auto">
			<div className="container flex items-center justify-center flex-col gap-3">
				<h2 className="text-primary text-4xl">
					Our Products & Ecosystem
				</h2>
				<div>
					<Product />
				</div>
			</div>
		</section>
	);
};

export default EcosystemSection;
