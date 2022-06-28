import React from "react";
import Chart from "../Chart.js";
import { GrCheckbox } from "react-icons/gr";

const TokenomicsSection = () => {
	return (
		<section className="container mx-auto py-20">
			<div className="flex items-center justify-center gap-8 md:flex-row flex-col">
				<div className="xl:w-[500px] lg:w-[400px] w-[300px]">
					<Chart />
				</div>
				<div className="flex flex-col items-center justify-start">
					<h1 className="text-3xl text-bold text-primary">
						Tokenomics
					</h1>
					<div className="py-2 flex flex-col items-center justify-center">
						<p className="text-gray">
							<span className="font-bold text-black">
								Total Token supply
							</span>{" "}
							- 1 Billion
						</p>
						<p className="text-gray">
							<span className="font-bold text-black">
								Token Name
							</span>{" "}
							- CQ Network Coin
						</p>
						<p className="text-gray">
							<span className="font-bold text-black">
								Token Symbol
							</span>{" "}
							- $CQNC
						</p>
						<p className="text-gray">
							<span className="font-bold text-black">
								Token Decimals
							</span>{" "}
							- 9
						</p>
						<p className="text-gray">
							<span className="font-bold text-black">
								Token Type
							</span>{" "}
							- BRC20
						</p>
					</div>
					<div className="flex pt-10 flex-col items-start ">
						<p className="flex items-center justify-around gap-2">
							{" "}
							<GrCheckbox /> 35% Presale
						</p>
						<p className="flex items-center justify-around gap-2">
							{" "}
							<GrCheckbox /> 35% Liquidity
						</p>
						<p className="flex items-center justify-around gap-2">
							{" "}
							<GrCheckbox /> 15% Team & Development
						</p>
						<p className="flex items-center justify-around gap-2">
							{" "}
							<GrCheckbox /> 15% Founders Board
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TokenomicsSection;
