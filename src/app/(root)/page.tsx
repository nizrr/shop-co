import AnnouncementBar from "@/components/AnnouncementBar";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div>
			<AnnouncementBar />
			<Navbar />
			<Hero />
			<Brands />
		</div>
	);
}
