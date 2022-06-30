import Image from "next/image";
import React from "react";
import Discord from "../../assets/socials/discord.png";
import Instagram from "../../assets/socials/instagram.png";
import Telegram from "../../assets/socials/telegram.png";
import Twitter from "../../assets/socials/twitter.jpg";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const SocialSection = () => {
	return (
		<div className="w-full bg-slate-50 mt-8" id="Community">
			<div className="container mx-auto px-4 py-16">
				<div className="text-center">
					<h2 className="md:text-3xl text-2xl font-bold text-center">
						Get connected with us{" "}
					</h2>
					<p className="text-center text-sm md:text-lg text-gray-600 ">
						Wanna know more and be a part of the Crypto Revolution?
					</p>
					<p className="text-center text-sm md:text-lg text-gray-600 ">
						Join the community and get connected with us.
					</p>
				</div>

				<div className="pt-8">
					<div className="flex justify-center gap-8">
						<div className="cursor-pointer hover:scale-110 hidden md:block">
							<Link href="https://discord.com/invite/TRvJvgfMbb">
								<Image
									src={Discord}
									alt=""
									width={50}
									height={50}
								/>
							</Link>
						</div>
						<div className="cursor-pointer hover:scale-110 hidden md:block">
							<Link href="https://www.instagram.com/_cqnetwork_/">
								<Image
									src={Instagram}
									alt=""
									width={50}
									height={50}
								/>
							</Link>
						</div>
						<div className="cursor-pointer hover:scale-110 hidden md:block">
							<Link href="https://t.me/CQNCOFFICIAL">
								<Image
									src={Telegram}
									alt=""
									width={50}
									height={50}
									className="rounded-full lg:rounded-none w-30 h-30"
								/>
							</Link>
						</div>
						<div className="cursor-pointer hover:scale-110 hidden md:block">
							<Link href="https://twitter.com/_cqnetwork_">
								<Image
									src={Twitter}
									alt=""
									width={50}
									height={50}
									className="rounded-full lg:rounded-none w-30 h-30"
								/>
							</Link>
						</div>

						<ul className="flex gap-4 md:hidden">
							<li className="mb-4">
								<a href="" className="text-primary text-[25px]">
									<FaDiscord />
								</a>
							</li>
							<li className="mb-4">
								<a href="" className="text-primary text-[25px]">
									<AiFillInstagram />
								</a>
							</li>
							<li className="mb-4">
								<a href="" className="text-primary text-[25px]">
									<FaTelegramPlane />
								</a>
							</li>
							<li className="mb-4">
								<a href="" className="text-primary text-[25px]">
									<AiOutlineTwitter />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialSection;
