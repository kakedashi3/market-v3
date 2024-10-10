'use client'

import { AutoConnect } from "thirdweb/react";
import { client } from "@/consts/client";
import { createWallet, inAppWallet } from "thirdweb/wallets";

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

export default function ClientWallets() {
  return (
    <AutoConnect
      client={client}
      timeout={10000}
      wallets={wallets}
      appMetadata={appMetadata}
    />
  );
}