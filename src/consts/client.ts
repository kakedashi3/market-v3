import { createThirdwebClient } from "thirdweb";

if (!process.env.NEXT_PUBLIC_TW_CLIENT_ID) {
	console.log("全環境変数:", process.env);
	console.log("NEXT_PUBLIC_TW_CLIENT_ID:", process.env.NEXT_PUBLIC_TW_CLIENT_ID);
	console.log("typeof NEXT_PUBLIC_TW_CLIENT_ID:", typeof process.env.NEXT_PUBLIC_TW_CLIENT_ID);
	throw new Error("NEXT_PUBLIC_TW_CLIENT_ID is not set");
  }

export const client = createThirdwebClient({
	clientId: process.env.NEXT_PUBLIC_TW_CLIENT_ID as string,
});