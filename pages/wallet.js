import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ComingSoon from "../assets/coming-soon.svg";

const Wallet = () => {
	const router = useRouter();

	return (
		<div className="w-full h-screen bg-opacity-5 bg-primary flex items-center gap-2 justify-center flex-col">
			<Image src={ComingSoon} alt="" width={200} height={200} />
			<h2 className="text-bold text-2xl text-primary">Coming Soon...</h2>
			<div className="flex items-center justify-center gap-4 flex-col">
				<p className="text-gray">
					Be notified when we are up and running?{" "}
				</p>
				<div className="flex items-center gap-4 justify-center">
					<input
						type="email"
						className="rounded-lg focus:shadow-sm bg-slate-100 outline-none border-0 py-3 px-4 w-full"
						placeholder="Enter your email"
					/>
					<button className="bg-primary rounded-full p-2 text-[14px] text-bold">
						Submit
					</button>
				</div>
			</div>
			<button
				onClick={() => router.replace("/")}
				className="border border-primary text-primary bg-transparent px-4 py-2 
                hover:bg-primary hover:text-white text-bold mt-4">
				Back to Home Page
			</button>
		</div>
	);
};

export default Wallet;
