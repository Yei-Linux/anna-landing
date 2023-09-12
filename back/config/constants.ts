export const Config = {
  IS_API_CREATE_DOCTORS_ENABLE: process.env.API_CREATE_DOCTORS_ENABLE === '1',
  JWT_SALT: Number(process.env.JWT_SALT ?? 10),
  JWT_SECRET: process.env.JWT_SECRET ?? '',
  JWT_AUDIENCE: process.env.JWT_AUDIENCE ?? 'urn:example:issuer',
  JWT_ISSUER: process.env.JWT_ISSUER ?? 'urn:example:audience',
  JWT_TOKEN_EXPIRATION: Number(process.env.JWT_TOKEN_EXPIRATION ?? 24),
};
