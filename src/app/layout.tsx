import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";
import { AutoConnect } from "thirdweb/react";
import { client } from "@/consts/client";
import { createWallet, inAppWallet } from "thirdweb/wallets";


export const metadata: Metadata = {
	title: "Marketplace",
	description: "",
};

const appMetadata = {
	name: "Your App Name",
	description: "Your app description",
	url: "https://yourapp.com",
	icons: ["https://yourapp.com/icon.png"]
  };

const wallets = [
	inAppWallet(),
	createWallet("io.metamask"),
	createWallet("com.coinbase.wallet"),
	createWallet("me.rainbow"),
  ];


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body style={{ paddingBottom: "100px" }}>
				<Providers>
				<AutoConnect
					client={client}
					timeout={10000}
					wallets={wallets}
					appMetadata={appMetadata}
					/>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
