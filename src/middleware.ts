import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';

import { authConfig } from '@/lib/auth';

import { paths } from './constants/paths.constants';
import {
  authRoutes,
  defaultLoggedInRedirectRoute,
  publicRoutes,
} from './constants/routes.constants';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(defaultLoggedInRedirectRoute, req.nextUrl));
    }

    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(paths.auth.login(), req.nextUrl));
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    '/((?!.+\\.[\\w]+$|_next|api/).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    // '/(api|trpc)(.*)',
  ],
};
