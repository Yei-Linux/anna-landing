/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_DATABASE_URL: process.env.NEXT_DATABASE_URL,
    NEXT_API_CREATE_DOCTORS_ENABLE: process.env.NEXT_API_CREATE_DOCTORS_ENABLE,
    NEXT_JWT_SALT: process.env.NEXT_JWT_SALT,
    NEXT_JWT_SECRET: process.env.NEXT_JWT_SECRET,
    NEXT_JWT_TOKEN_EXPIRATION: process.env.NEXT_JWT_TOKEN_EXPIRATION,
    NEXT_JWT_AUDIENCE: process.env.NEXT_JWT_AUDIENCE,
    NEXT_JWT_ISSUER: process.env.NEXT_JWT_ISSUER,
  },
};

module.exports = nextConfig;
