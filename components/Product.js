import Image from "next/image";
import React from "react";
import { GrCheckbox } from "react-icons/gr";
import Buy from "../assets/illustrations/buy.png";
import Bank from "../assets/illustrations/banknew.png";
import Pay from "../assets/illustrations/cpay.png";
import PrimaryButton from "../buttons/PrimaryButton";

const Product = () => {
	return (
		<div className="flex flex-col gap-10">
			{/* CQ Pay */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 h-content">
				<div className="hover:scale-105 transition-all duration-300 ease-in-out">
					<Image src={Pay} alt="Trading" width="450" height="300" />
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
							<GrCheckbox className="w-4" /> Wallet to store and
							receive Crypto and Fiat
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Send and receive
							crypto with username ot tag.
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Bridge between BSC
							and BRC
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Scan Qr to Pay or
							Receive
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Hold CQNC and earn
							rewards (no staking required)
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Instant swap between
							BSC and BRC
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Instantly buy crypto
							with your Visa/Mastercard
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> BSC and BRC Coins
							Integrated
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> Instant buy and sell
							protocol
						</p>
						<p className="font-medium flex items-center justify-center gap-3">
							<GrCheckbox className="w-4" /> CQ pay
							Visa/Mastercard for stake holders
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

			{/* CQD Exchange */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-10 h-content">
				<div className="flex flex-col items-center justify-center">
					<h3 className="md:text-4xl text-3xl pt-4 flex  items-center justify-center flex-col">
						Buy, Trade and Earn on the{" "}
						<span className="text-primary">CQD Exchange</span>
						<span className=" font-bold text-[13px] -mt-2">
							{" "}
							* Zero trading Fees
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
