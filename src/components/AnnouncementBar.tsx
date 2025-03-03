import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

function AnnouncementBar() {
	return (
		<div className="w-full bg-black text-white py-2 text-center ">
			<div className="mx-auto relative text-sm px-3 2xl:px-30 flex justify-center">
				<div className="absolute">
					Sign up and get 20% off to your first order.{" "}
					<Link
						href="/"
						className="underline">
						Sign Up Now
					</Link>
				</div>
				<X className="ms-auto cursor-pointer" />
			</div>
		</div>
	);
}

export default AnnouncementBar;
