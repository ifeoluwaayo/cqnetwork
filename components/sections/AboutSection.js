import Image from "next/image";
import React, { useState } from "react";
import CQB from "../../assets/illustrations/CQB.png";
import CQD from "../../assets/illustrations/CQD.png";
import CQNC from "../../assets/illustrations/CQNC.png";
import { BsChevronRight } from "react-icons/bs";

const AboutSection = () => {
	const [hidden, setHidden] = useState(true);
	return (
		<section className="mt-8 container" id="About">
			<div className="flex flex-col container rounded-2xl bg-white p-8 shadow-xl gap-6">
				<div className="flex items-center flex-col justify-center ">
					<h3 className="text-3xl font-bold text-center text-primary">
						CQ Network a Decentralised Network of business
						organizations.
					</h3>
					<p className="text-center p-4 text-[14px] text-gray">
						CQ Network is a revolutionary - Decentralised network of
						business organisations built on Bitgert blockchain. Low
						gas fees, low service provider fees, zero interest
						trading loan, zero trading fees, crypto bank backed by
						stable coin, crypto merchants, entrepreneur fund
						raising, investment opportunities, career development
						and much more makes CQ network outstanding from the
						entire crypto global market.{" "}
						<span className={`${hidden ? "hidden" : "flex"}`}>
							hidden text
						</span>
						{hidden ? (
							<p
								className="text-green cursor-pointer flex justify-end items-center"
								onClick={() => setHidden(!hidden)}>
								... More{" "}
								<BsChevronRight className="inline ml-2 w-3" />
							</p>
						) : (
							<p
								className="text-green cursor-pointer flex justify-end items-center"
								onClick={() => setHidden(!hidden)}>
								... See Less{" "}
							</p>
						)}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
					<div
						className="flex flex-col group items-center justify-center shadow-xl p-4 rounded-2xl 
					bg-primary bg-opacity-5 hover:scale-90 transition-all duration-300 ease-in-out">
						<div className="group-hover:animate-bounce">
							<Image
								src={CQNC}
								alt="CQNetwork"
								width="100"
								height="100"
								className="animate"
							/>
						</div>
						<h3 className="text-2xl font-bold text-center text-primary">
							CQNC
						</h3>
						<p className="text-[14px] text-gray">
							The Governance Token of the CQ Network
						</p>
					</div>
					<div
						className="flex group flex-col items-center justify-center shadow-xl p-4 rounded-2xl
					bg-primary bg-opacity-5 hover:scale-90 transition-all duration-300 ease-in-out">
						<div className="group-hover:animate-bounce">
							<Image
								src={CQD}
								alt="CQNetwork"
								width="100"
								height="100"
								className="animate"
							/>
						</div>
						<h3 className="text-2xl font-bold text-center text-primary">
							CQD
						</h3>
						<p className="text-[14px] text-gray">
							The Exchange of the CQ Network
						</p>
					</div>
					<div
						className="flex group flex-col items-center justify-center shadow-xl p-4 rounded-2xl
					bg-primary bg-opacity-5 hover:scale-90 transition-all duration-300 ease-in-out">
						<div className="group-hover:animate-bounce">
							<Image
								src={CQB}
								alt="CQNetwork"
								width="100"
								height="100"
								className="animate"
							/>
						</div>
						<h3 className="text-2xl font-bold text-center text-primary">
							CQBD
						</h3>
						<p className="text-[14px] text-gray">
							The stable coin of the CQ Network
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
