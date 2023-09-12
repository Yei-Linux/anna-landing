import { SignJWT, jwtVerify } from 'jose';
import { Config } from '../config/constants';

export async function sign(payload: any, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + Config.JWT_TOKEN_EXPIRATION * 60 * 60;

  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setIssuer(Config.JWT_ISSUER)
    .setAudience(Config.JWT_AUDIENCE)
    .setExpirationTime(exp)
    .sign(new TextEncoder().encode(secret));

  return token;
}

export async function verify(token: string, secret: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      {
        issuer: Config.JWT_ISSUER,
        audience: Config.JWT_AUDIENCE,
      }
    );
    return !!payload;
  } catch (error) {
    throw new Error('Error verifying token');
  }
}
