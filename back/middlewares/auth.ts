import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { Config } from '../config/constants';

export const isAuthMiddleware = (request: NextRequest) => {
  const auth = request.headers.get('authorization');

  if (!auth) {
    return false;
  }
  const [bearer_text, token] = auth.split(' ');

  jwt.verify(token, Config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return false;
    }

    return true;
  });
};
