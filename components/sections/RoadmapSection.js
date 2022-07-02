import React from "react";
import { Chrono } from "react-chrono";
import data from "../../utils/data";
import { useMediaQuery } from "react-responsive";

const RoadmapSection = () => {
	const mode = useMediaQuery({ query: "(max-width: 767px)" })
		? "VERTICAL"
		: "VERTICAL_ALTERNATING";

	const item = useMediaQuery({ query: "(max-width: 767px)" }) ? data : data;
	return (
		<section
			className="container py-10 lg:flex flex-col items-center h-[70%] gap-4 justify-center text-center"
			id="Roadmap">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-4xl text-bold text-primary">Roadmap</h2>
				<div className="lg:w-[85%] xl:w-[70%] pt-10 flex-1 items-center justify-center">
					<Chrono items={item} mode={mode}>
						<div className="p-4">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul className="flex flex-col items-start justify-start left-0">
								<li>- CQ network platform build for presale</li>
								<li>- Contract deployment</li>
								<li>- Marketing and advertising</li>
								<li>- Presale begins in sphynx launch pad</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>
									- CQ Network licensing and corporate office
									in U.A.E
								</li>
								<li>
									- CQ pay desktop wallet -Launch(beta
									version)
								</li>
								<li>
									- CQ pay iOS/Android wallet launch (beta
									version)
								</li>
								<li>- Audit process</li>
								<li>- Coingecko listing</li>
								<li>- Coinmarket cap listing</li>
								<li>- Bridge CQNC to other blockchain</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>- Airdrop to community.(SURPRISE)</li>
								<li>
									- Integrating top crypto currency based on
									community vote + brc20 tokens.
								</li>
								<li>
									- CQ pay wallet upgradation (instant buy and
									sell protocol)
								</li>
								<li>
									- CQ cash wallet + Visa/master card purchase
									+
								</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>
									- CQ pay payment services llc (buy and sell
									crypto offline)
								</li>
								<li>
									- CQ network own merchant outlets launch in
									the United Arab emirates
								</li>
								<li>
									- CQ network online shopping website launch
								</li>
								<li>- CQ pay partnership for payments</li>
								<li>- CQ pay visa /master Card for holders</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>
									- CQD - Exchange website version beta launch
									(zero trading fees)
								</li>
								<li>
									- CQD - application beta
									-iOS/Android/desktop launch
								</li>
								<li>- CQD final version launch</li>
								<li>- CQD native token launch</li>
								<li>
									- CQD zero interest loan for CQNC
									stakeholders
								</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>
									- CQD HI integrated trading bots
									upgradation.
								</li>
								<li>- CQ network blockchain development</li>
								<li>
									- CQ network blockchain,crypto institutions
								</li>
								<li>
									- Charity support based on community nation
									wide
								</li>
							</ul>
						</div>
						<div className="w-content">
							{/* <h2 className="text-2xl text-primary md:hidden mb-2">
								Q1 2022
							</h2> */}
							<ul>
								<li>- CQB Bank</li>
								<li>- QBD stable coin launch</li>
								<li>
									- CQB startup fund allocation for
									entrepreneurs
								</li>
								<li>- CQB zero interest dividend loans</li>
								<li>- Roadmap 2.0 (NFT, Metaverse….etc)</li>
								<li>
									- Road map never ends. We are building the
									future with crypto currency.
								</li>
							</ul>
						</div>
					</Chrono>
				</div>
			</div>
		</section>
	);
};

export default RoadmapSection;
