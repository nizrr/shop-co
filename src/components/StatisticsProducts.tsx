import React from "react";
import { Separator } from "./ui/separator";

function StatisticsProducts() {
	return (
		<div className="flex flex-wrap space-x-5 h-20 justify-center lg:justify-start">
			<div className="flex flex-col">
				<div className="font-bold lg:text-5xl text-2xl">200+</div>
				<span className="opacity-60">International Brands</span>
			</div>
			<Separator
				orientation="vertical"
				className="h-10 my-2 w-3"
			/>
			<div>
				<div className="font-bold lg:text-5xl text-2xl">2,000+</div>
				<span className="opacity-60">High-Quality Products</span>
			</div>
			<Separator
				orientation="vertical"
				className="h-10 my-2 w-3 hidden lg:block"
			/>
			<div>
				<div className="font-bold lg:text-5xl text-2xl">30,000+</div>
				<span className="opacity-60">Happy Customers</span>
			</div>
		</div>
	);
}

export default StatisticsProducts;
