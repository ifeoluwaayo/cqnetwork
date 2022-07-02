import Image from "next/image";
import React from "react";
import Logo from "../assets/illustrations/min-logo.png";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Bitgert from "../assets/bitgert.png";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col" id="Footer">
			<div className="container mx-auto border-t border-lightgray px-4">
				<div className="lg:grid lg:grid-cols-2 flex flex-col p-8">
					<div
						className="flex flex-col lg:flex-row border-b lg:border-none border-lightgray lg:p-6 justify-left lg:justify-around items-left 
					lg:items-center pt-16 md:flex-row md:justify-around">
						<div className="mb-4">
							<Image
								src={Logo}
								alt="CQ Network"
								width={230}
								height={80}
							/>
						</div>
						<ul>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Whitepaper
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									About Us
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Buy CQ
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Our Products
								</a>
							</li>
						</ul>
					</div>
					<div
						className="flex lg:items-center flex-col lg:flex-row lg:justify-around lg:border-l 
					lg:border-lightgray justify-left items-left pt-4 lg:pt-0 md:flex-row md:justify-around">
						<ul className="justify-start items-left flex flex-col">
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Career
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Blog
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Security
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Contact Us
								</a>
							</li>
							<li className="mb-4">
								<a
									href=""
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Help Center
								</a>
							</li>
						</ul>

						<div className="flex items-center gap-2 pt-4 lg:pt-0 flex-col md:items-center md:justify-center">
							<ul className="flex gap-4">
								<li className="mb-4">
									<a
										href=""
										className="text-primary text-[25px]">
										<FaDiscord />
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-primary text-[25px]">
										<AiFillInstagram />
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-primary text-[25px]">
										<FaTelegramPlane />
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-primary text-[25px]">
										<AiOutlineTwitter />
									</a>
								</li>
							</ul>

							<div className="flex items-center">
								<h2>In Partnership with :</h2>
								<Image
									src={Bitgert}
									alt="CQ Network"
									width={55}
									height={50}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-3 bg-slate-50">
				<p className="text-gray text-sm">
					&copy; Copyright 2022 CQ Networks. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
