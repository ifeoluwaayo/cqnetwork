import Image from "next/image";
import React, { useState, Fragment } from "react";
import Logo from "../assets/illustrations/min-logo.png";
import Binance from "../assets/illustrations/binance.jpeg";
import Sypnx from "../assets/illustrations/sypnx.jpeg";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Bitgert from "../assets/bitgert.png";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	function closeModal() {
		setShowModal(false);
	}

	function openModal() {
		setShowModal(true);
	}

	const submit = (e) => {
		e.preventDefault();
		// Submit Functionality
		closeModal();
	};

	return (
		<footer className="w-full flex flex-col" id="Footer">
			<div className="container mx-auto border-t border-lightgray px-4">
				<div className="lg:grid lg:grid-cols-2 flex flex-col p-8">
					<div
						className="flex flex-col lg:flex-row border-b lg:border-none border-lightgray lg:p-6 justify-left lg:justify-around items-left 
					lg:items-center pt-16 md:flex-row md:justify-around">
						<div
							className="mb- hover:cursor-pointer"
							onClick={() => window.scrollTo(0, 0)}>
							<Link href="">
								<Image
									src={Logo}
									alt="CQ Network"
									width={200}
									height={72}
								/>
							</Link>
						</div>
						<ul>
							<li className="mb-4">
								<a
									href="/whitepaper.pdf"
									download="CQNC Whitepaper"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Whitepaper
								</a>
							</li>
							<li className="mb-4">
								<Link href="#About">
									<a className="text-gray text-[14px] hover:text-primary hover:font-bold">
										About Us
									</a>
								</Link>
							</li>
							<li className="mb-4">
								<Link href="/presale">
									<a className="text-gray text-[14px] hover:text-primary hover:font-bold">
										Buy CQNC
									</a>
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#Products">
									<a className="text-gray text-[14px] hover:text-primary hover:font-bold">
										Our Products
									</a>
								</Link>
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
							<li className="mb-4 cursor-pointer">
								<div onClick={openModal}>
									<a className="text-gray text-[14px] hover:text-primary hover:font-bold">
										Contact Us
									</a>
								</div>
							</li>
							<li className="mb-4">
								<a
									href="mailto:support@cqnetwork.net"
									className="text-gray text-[14px] hover:text-primary hover:font-bold">
									Help Center
								</a>
							</li>
						</ul>

						<div className="flex items-center gap-2 pt-4 lg:pt-0 flex-col md:items-center md:justify-center">
							<div className="flex items-center pt-4 text-gray justify-center text-sm mb-4">
								<GoLocation className="w-4 h-4 mr-2" />{" "}
								<p className="text-muted">
									United Arab Emirates{" "}
								</p>
							</div>

							<ul className="flex gap-4">
								<li className="mb-4">
									<a
										href="https://discord.com/invite/TRvJvgfMbb"
										className="text-primary text-[25px]">
										<FaDiscord />
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://www.instagram.com/_cqnetwork_/"
										className="text-primary text-[25px]">
										<AiFillInstagram />
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://t.me/CQNCOFFICIAL"
										className="text-primary text-[25px]">
										<FaTelegramPlane />
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://twitter.com/_cqnetwork_"
										className="text-primary text-[25px]">
										<AiOutlineTwitter />
									</a>
								</li>
							</ul>

							<div className="flex items-center gap-4">
								<Image
									src={Binance}
									alt="Binance"
									width={50}
									height={40}
								/>
								<Image
									src={Sypnx}
									alt="Sypnx"
									width={100}
									height={40}
								/>
								<Image
									src={Bitgert}
									alt="CQ Network"
									width={50}
									height={40}
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

			{/* Modal */}
			<Transition appear show={showModal} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h2"
										className="text-xl font-medium leading-6 flex items-center justify-center text-gray-900 text-primary">
										Contact Us
									</Dialog.Title>
									<div className="mt-6">
										<form netlify name="contact">
											<div className="flex items-start justify-center flex-col gap-4">
												<input
													className="flex rounded-lg focus:shadow-md bg-slate-100 outline-none border-0 py-3 px-4 w-full flex-1"
													placeholder="Name"
													type="text"
													name="name"
												/>
												<input
													className="flex rounded-lg focus:shadow-md bg-slate-100 outline-none border-0 py-3 px-4 w-full flex-1"
													placeholder="Email"
													type="text"
													name="email"
												/>
												<textarea
													className="flex rounded-lg focus:shadow-md bg-slate-100 outline-none border-0 py-3 px-4 w-full flex-1"
													placeholder="Message"
													type="text"
													name="message"
												/>
											</div>
											<div className="mt-8 flex items-center justify-around">
												<button
													className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={submit}
													type="submit">
													Submit
												</button>

												<button
													type="button"
													className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}>
													Close{" "}
												</button>
											</div>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</footer>
	);
};

export default Footer;
