import { env } from 'process';

export const Config = {
  JWT_SALT: Number(env.JWT_SALT ?? 10),
  JWT_SECRET: env.JWT_SECRET ?? '',
  JWT_TOKEN_EXPIRATION: env.JWT_TOKEN_EXPIRATION ?? '',
};
