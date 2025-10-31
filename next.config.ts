
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {

      

        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',

      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './feature/i18n/request.ts',
});

export default withNextIntl(nextConfig);
