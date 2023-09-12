import { NextRequest } from 'next/server';
import { Config } from '../config/constants';
import { verify } from '../helpers/jwt';

export const isAuthMiddleware = async (request: NextRequest) => {
  const auth = request.headers.get('authorization');

  if (!auth) {
    return false;
  }

  const [bearer_text, token] = auth.split(' ');
  const isVerify = await verify(token, Config.JWT_SECRET);

  return isVerify;
};
