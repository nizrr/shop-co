import { integral } from "@/fonts/localFonts";
import React from "react";
import ShopNowButton from "./ShopNowButton";
import StatisticsProducts from "./StatisticsProducts";
import Image from "next/image";

function Hero() {
	return (
		<section className="hero grid grid-cols-1 lg:grid-cols-2 2xl:px-30 px-3 lg:place-items-center pt-10 lg:pt-0 relative">
			<div className="space-y-6 ">
				<div className={`${integral.className} font-bold min-[2000px]:text-8xl! md:text-[64px] text-[40px] leading-[1] `}>
					FIND CLOTHES <br /> THAT MATCHES <br />
					YOUR STYLE
				</div>
				<div className="opacity-60">
					Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
				</div>
				<ShopNowButton />
				<StatisticsProducts />
			</div>
			<div className="h-[350px] lg:h-full bottom-0 mt-auto lg:mt-0 w-full">
				<div className="relative h-full w-full">
					<Image
						src={"/images/hero.png"}
						fill
						alt="image"
						className="w-full object-contain object-bottom"
						priority
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
