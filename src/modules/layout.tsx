import { Outlet } from "react-router-dom";
import Navbar from "./partials/navbar";

const RootLayout = () => {
	return (
		<div className="min-h-screen bg-background font-sans antialiased">
			<Navbar />
			<main className="container mx-auto py-6 px-4">
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
