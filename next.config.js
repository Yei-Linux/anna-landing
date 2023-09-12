/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    NEXT_PUBLIC_API_CREATE_DOCTORS_ENABLE:
      process.env.NEXT_PUBLIC_API_CREATE_DOCTORS_ENABLE,
    NEXT_PUBLIC_JWT_SALT: process.env.NEXT_PUBLIC_JWT_SALT,
    NEXT_PUBLIC_JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
    NEXT_PUBLIC_JWT_TOKEN_EXPIRATION:
      process.env.NEXT_PUBLIC_JWT_TOKEN_EXPIRATION,
    NEXT_PUBLIC_JWT_AUDIENCE: process.env.NEXT_PUBLIC_JWT_AUDIENCE,
    NEXT_PUBLIC_JWT_ISSUER: process.env.NEXT_PUBLIC_JWT_ISSUER,
  },
};

module.exports = nextConfig;
