import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";
import ClientWallets from "@/components/shared/ClientWallets";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "",
};

export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en">
		<body>
		  <div style={{ paddingBottom: "100px" }}>
			<Providers>
			  <ClientWallets />
			  <Navbar />
			  {children}
			</Providers>
		  </div>
		</body>
	  </html>
	);
  }