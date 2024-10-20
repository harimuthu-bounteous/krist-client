// @ts-check
// import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nocajhsrlymhnxsemfoa.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/krist_DB_images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
