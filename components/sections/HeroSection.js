import Image from "next/image";
import React from "react";
import globoCrypto from "../../assets/illustrations/qscd.png";
import PrimaryButton from "../../buttons/PrimaryButton";
import { FaAngleRight } from "react-icons/fa";
import Typical from "react-typical";

const HeroSection = () => {
	return (
		<section
			className="bg-primary bg-opacity-5 py-10 md:h-auto h-[80vh]"
			id="Home">
			<div className="grid lg:grid-cols-2 container mx-auto">
				<div className="flex items-center">
					<div>
						<p className="text-primary font-bold text-[14px]">
							RE-IMAGINE CRYPTO PAYMENTS
						</p>
						<h1 className="text-5xl font-bold leading-normal">
							$CQNC -{" "}
						</h1>
						<h1 className="text-5xl font-bold leading-normal">
							THE WORLD WIDE
						</h1>
						<h1
							className="text-5xl font-bold leading-normal bg-gradient-to-r bg-clip-text  
							text-transparent from-[#013220] via-[#D0F0C0] to-primary
            				animate-text">
							{" "}
							<Typical
								loop={Infinity}
								wrapper="p"
								steps={[
									"LEGAL TENDER",
									500,
									"CIRCULATING MEDIUM",
									500,
									"PAYMENT METHOD",
									500,
									"MONEY",
									500,
								]}
							/>
						</h1>
						<div className="my-3 hidden xl:block">
							<p className="text-gray">
								A single token with the power of many tokens,
								advanced utility token
								<p>
									{" "}
									with digital cash characteristics, exchange
									of goods & services.
								</p>
							</p>
							<p className="text-gray">
								An ever ending solution for crypto community ,
								we are <p> building future with $CQNC</p>
							</p>
						</div>

						<div className="xl:hidden block my-3">
							<p className="text-gray">
								A single token with the power of many tokens,
								advanced utility token with digital cash
								characteristics, exchange of goods & services.
								An ever ending solution for crypto community ,
								we are building future with $CQNC
							</p>
						</div>
						<div className="flex gap-6 mt-6 items-center">
							<PrimaryButton
								className="hover:bg-white hover:text-primary text-white bg-primary 
                                px-4 py-2 rounded-lg border-primary border shadow-lg 
                                transition-colors duration-300">
								Buy CQNC
							</PrimaryButton>

							<a
								href="/whitepaper.pdf"
								download="CQNC Whitepaper"
								target="_blank"
								rel="noopener noreferrer">
								<div
									className="flex items-center justify-center hover:text-primary hover:border-b-2
							border-primary hover:text-bold cursor-pointer hover:animate-pulse">
									Whitepaper
									<FaAngleRight />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="hidden lg:block">
					<Image src={globoCrypto} alt="CQNetwork" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
