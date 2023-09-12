export const Config = {
  IS_API_CREATE_DOCTORS_ENABLE:
    process.env.NEXT_PUBLIC_API_CREATE_DOCTORS_ENABLE === '1',
  JWT_SALT: Number(process.env.NEXT_PUBLIC_JWT_SALT ?? 10),
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET ?? '',
  JWT_AUDIENCE: process.env.NEXT_PUBLIC_JWT_AUDIENCE ?? 'urn:example:issuer',
  JWT_ISSUER: process.env.NEXT_PUBLIC_JWT_ISSUER ?? 'urn:example:audience',
  JWT_TOKEN_EXPIRATION: Number(
    process.env.NEXT_PUBLIC_JWT_TOKEN_EXPIRATION ?? 24
  ),
};
