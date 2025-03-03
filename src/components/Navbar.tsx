import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { integral } from "@/fonts/localFonts";

function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background flex justify-center py-3">
			<div className="w-full px-3 2xl:px-30 flex h-16 items-center justify-between">
				<div className="flex items-center gap-6">
					<Link
						href="/"
						className={`font-bold  ${integral.className} text-[34px] flex items-center pb-2`}>
						SHOP.CO
					</Link>
					<nav className="hidden md:flex items-center gap-6">
						<Link
							href="#"
							className="text-base font-medium">
							Shop
						</Link>
						<Link
							href="#"
							className="text-base font-medium">
							On Sale
						</Link>
						<Link
							href="#"
							className="text-base font-medium">
							New Arrivals
						</Link>
						<Link
							href="#"
							className="text-base font-medium">
							Brands
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<div className="relative hidden md:flex items-center">
						<Search className="absolute left-2.5 size-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search for products..."
							className="w-[200px] lg:w-[500px] pl-8 bg-accent rounded-full border-0 shadow-0"
						/>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="relative">
						<ShoppingBag className="h-5 w-5" />
						<Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">0</Badge>
					</Button>
					<Button
						variant="ghost"
						size="icon">
						<User className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
