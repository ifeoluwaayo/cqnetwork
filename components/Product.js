import Image from "next/image";
import React from "react";
import { GrCheckbox } from "react-icons/gr";
import Buy from "../assets/illustrations/buy.png";
import Bank from "../assets/illustrations/bank.png";
import Pay from "../assets/illustrations/hand.png";
import PrimaryButton from "../buttons/PrimaryButton";

const Product = () => {
	return (
		<div className="flex flex-col gap-10">
			{/* CQD Exchange */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-10 h-content">
				<div className="flex flex-col items-center justify-center">
					<h3 className="md:text-4xl text-3xl pt-4 flex  items-center justify-center flex-col">
						Buy, Trade and Swap on the{" "}
						<span className="text-primary">CQ Exchange</span>
						<span className=" font-bold text-[13px] -mt-2">
							{" "}
							* Zero Fee trading for CQNC Holders
						</span>
					</h3>
					<div className="flex flex-col items-start">
						<p className=" font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Building with the
							native CQD native token
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Stake CQNC and avail
							CQD zero interest loans
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Direct bank transfer
							support
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Visa/mastercard
							integrated.
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Hybrid intelligence
							integrated inbuilt bots.
						</p>
					</div>

					<PrimaryButton
						className="hover:bg-gray hover:text-white text-white bg-gray
                                px-4 py-2 rounded-lg border-gray border shadow-lg 
                                transition-colors duration-300 mt-8 cursor-not-allowed">
						Coming soon
					</PrimaryButton>
				</div>
				<div className="hover:scale-105 transition-all duration-300 ease-in-out">
					<Image src={Buy} alt="Trading" width="400" height="400" />
				</div>
			</div>

			{/* CQ Pay */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 h-content">
				<div className="hover:scale-105 transition-all duration-300 ease-in-out">
					<Image src={Pay} alt="Trading" width="450" height="400" />
				</div>
				<div className="flex flex-col items-center justify-center pt-4">
					<h3 className="md:text-3xl text-2xl flex items-center justify-center flex-col">
						Instant Pay anywhere in the world with{" "}
						<span className="text-primary">CQ Pay</span>
						<span className=" font-bold text-[10px] md:text-[13px] -mt-2">
							{" "}
							* Unlimited transaction with CQNC
						</span>
					</h3>
					<div className="flex flex-col items-start">
						<p className=" font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> CQ pay is integrated
							with all the major top crypto currencies
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> CQ pay support
							visa/mastercard purchases protocol.
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> CQ pay visa/master
							cards for stakeholders
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> CQ pay merchant
							support world wide online and offline
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Staking and Cashback
							loyalty rewards for all our holders.
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Low gas fee built in
							brc20 blockchain
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> 24*7 in built in
							customer support.
						</p>
					</div>
					<PrimaryButton
						className="hover:bg-white hover:text-primary text-white bg-primary 
                                px-4 py-2 rounded-lg border-primary border shadow-lg 
                                transition-colors duration-300 mt-8">
						Get Started
					</PrimaryButton>
				</div>
			</div>

			{/* Bank */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-10 h-content">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-2xl md:text-3xl pt-4 flex  items-center justify-center flex-col">
						Enjoy the bank of the Future with{" "}
						<span className="text-primary">CQB Crypto Banking</span>
						<span className=" font-bold text-[13px] -mt-2">
							{" "}
							* Coming at 1 billion dollar MCap..
						</span>
					</h3>
					<div className="flex flex-col items-start">
						{/* <p className=" font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> You own and take part
							in the bank affairs through the DAO
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Low gas fee built in
							BRC-20 blockchain
						</p>
						
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Other surprises after
							launch
						</p> */}
						<PrimaryButton
							className="hover:bg-gray hover:text-white text-white bg-gray
                                px-4 py-2 rounded-lg border-gray border shadow-lg 
                                transition-colors duration-300 mt-8 cursor-not-allowed">
							Coming soon
						</PrimaryButton>
					</div>
				</div>
				<div className="hover:scale-105 transition-all duration-300 ease-in-out">
					<Image src={Bank} alt="Trading" width="500" height="400" />
				</div>
			</div>
		</div>
	);
};

export default Product;
