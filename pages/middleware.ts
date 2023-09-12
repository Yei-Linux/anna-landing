import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthMiddleware } from '../back/middlewares/auth';

export function middleware(request: NextRequest) {
  if (!isAuthMiddleware(request)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }
}

export const config = {
  matcher: [
    '/api/clinic-histories/:function*',
    '/api/diagnosis/:function*',
    '/api/patients/:function*',
  ],
};
