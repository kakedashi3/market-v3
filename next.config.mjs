/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_TW_CLIENT_ID: process.env.NEXT_PUBLIC_TW_CLIENT_ID,
    },
    // 環境変数が設定されていない場合のエラーハンドリング
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (!process.env.NEXT_PUBLIC_TW_CLIENT_ID) {
        console.error('NEXT_PUBLIC_TW_CLIENT_ID is not set in the environment variables');
        throw new Error('NEXT_PUBLIC_TW_CLIENT_ID is required');
      }
      return config;
    },
  };
  
  export default nextConfig;