import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/illustrations/min-logo.png";
import PrimaryButton from "../buttons/PrimaryButton";
import { GlobeIcon } from "../assets/Globe";
import { ReactCountryFlag } from "react-country-flag";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import classNames from "classnames";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

const axios = require("axios").default;

const Header = () => {
	const [lang, setLang] = useState("en");
	const { locales, activeLocale } = useRouter();
	const [navBar, setNavBar] = useState(false);
	const router = useRouter();
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const options = locales.filter((locale) => locale !== activeLocale);

	const changeBackground = () => {
		if (window.scrollY > 0) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	const handleBlackScreenClick = (e) => {
		e.stopPropagation();
		setDropdownOpen(false);
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<nav
			className={`  w-full justify-center ${
				navBar || dropdownOpen
					? "fixed bg-white z-10 shadow-xl"
					: "sticky bg-opacity-5 bg-primary"
			}`}>
			{/* Desktop */}
			<div
				className={`py-4 hidden xl:flex items-center justify-between mx-12 top-0`}>
				<div className="flex mr-6">
					<Image src={Logo} width={200} height={65} alt="CQNetwork" />
				</div>

				<div className="flex items-center justify-between">
					<div className="flex">
						<Link href="#Home">
							<a className="mx-4 hover:text-primary hover:font-bold">
								Home
							</a>
						</Link>
						<Link href="#About">
							<a className="mx-4 hover:text-primary hover:font-bold">
								About
							</a>
						</Link>
						<Link href="#Tokenomics">
							<a className="mx-4 hover:text-primary hover:font-bold">
								Tokenomics
							</a>
						</Link>
						<Link href="#Products">
							<a className="mx-4 hover:text-primary hover:font-bold">
								Ecosystem
							</a>
						</Link>
						<Link href="#Roadmap">
							<a className="mx-4 hover:text-primary hover:font-bold">
								Roadmap
							</a>
						</Link>
						<Link href="#Community">
							<a className="mx-4 hover:text-primary hover:font-bold">
								Community
							</a>
						</Link>
					</div>
					<div className="px-4 flex gap-1">
						<GlobeIcon width={22} height={22} />
						<select
							className="uppercase font-semibold text-[14px] cursor-pointer outline-none border-none
							bg-transparent"
							onChange={(e) => setLang(e.target.value)}
							onClick={() => {
								router.push("/", "/", {
									locale: lang,
								});
							}}>
							{options.map((option, index) => (
								<option
									value={option}
									key={index}
									className="uppercase cursor-pointer ">
									<div>{option}</div>
								</option>
							))}
						</select>
						<div className="flex items-center w-3">
							<ReactCountryFlag
								countryCode={lang === "en" ? "gb" : lang}
								className="w-3"
								svg
								cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
								cdnSuffix="svg"
								title={lang === "en" ? "gb" : lang}
							/>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-end gap-3">
					<PrimaryButton
						className="hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300"
						onClick={() => router.push("/wallet")}>
						Wallet
					</PrimaryButton>

					<PrimaryButton
						className="hover:bg-white hover:text-primary text-white bg-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300"
						onClick={() => router.push("/presale")}>
						Buy CQNC
					</PrimaryButton>
				</div>
			</div>

			{/* Mobile */}
			<div className="py-4 xl:hidden flex items-center justify-between mx-12 top-0">
				<div className="flex mr-6">
					<Image src={Logo} width={200} height={65} alt="CQNetwork" />
				</div>
				<div className="flex items-center justify-end gap-3">
					<PrimaryButton
						className={`${
							dropdownOpen ? "hidden" : ""
						} hover:bg-white hover:text-primary text-white bg-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300`}>
						Wallet
					</PrimaryButton>
					<PrimaryButton
						className={`${
							dropdownOpen ? "hidden" : ""
						} hover:bg-primary hidden md:block hover:text-white text-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300`}>
						Buy CQ
					</PrimaryButton>

					<div
						className="pl-4"
						onClick={() => setDropdownOpen(!dropdownOpen)}>
						{!dropdownOpen ? <GiHamburgerMenu /> : <GrClose />}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={classNames({
					"text-base left-0 top-full right-0 absolute transition-all duration-400": true,
					"invisible opacity-0": !dropdownOpen,
					"visible opacity-100": dropdownOpen,
				})}>
				<div
					className="h-screen left-0 bg-black bg-opacity-30"
					onClick={handleBlackScreenClick}>
					<div className="z-20 shadow-xl bg-white p-6">
						<div className="gap-4 flex items-center justify-around mb-6">
							<PrimaryButton
								className="hover:bg-white hover:text-primary text-white bg-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300">
								Wallet
							</PrimaryButton>
							<PrimaryButton
								className="hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-lg 
				border-primary border shadow-lg transition-colors duration-300">
								Buy CQNC
							</PrimaryButton>
						</div>
						<div className="mb-4">
							<div className="flex flex-col items-center justify-center">
								<Link href="#Home">
									<a
										// href=""
										className="mx-4 hover:text-primary hover:font-bold">
										Home
									</a>
								</Link>
								<Link href="#About">
									<a className="mx-4 hover:text-primary hover:font-bold">
										About
									</a>
								</Link>
								<Link href="#Tokenomics">
									<a className="mx-4 hover:text-primary hover:font-bold">
										Tokenomics
									</a>
								</Link>
								<Link href="#Products">
									<a className="mx-4 hover:text-primary hover:font-bold">
										Ecosystem
									</a>
								</Link>
								<Link href="#Roadmap">
									<a className="mx-4 hover:text-primary hover:font-bold">
										Roadmap
									</a>
								</Link>
								<Link href="#Community">
									<a className="mx-4 hover:text-primary hover:font-bold">
										Community
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
