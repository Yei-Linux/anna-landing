import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthMiddleware } from './back/middlewares/auth';

export async function middleware(request: NextRequest) {
  const isAuth = await isAuthMiddleware(request);
  if (!isAuth) {
    request.nextUrl.searchParams.set('from', request.nextUrl.pathname);
    request.nextUrl.pathname = '/login';

    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/clinic-histories/:path*',
    '/api/diagnosis/:path*',
    '/api/patients/:path*',
  ],
};
