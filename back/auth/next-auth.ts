import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { authorize } from './authorize';
import { AUTH_PROVIDERS, AUTH_SECRET } from './constants';
import prisma from '../config/prisma';

export const handlerAuth = NextAuth({
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  secret: AUTH_SECRET,
  providers: [
    GoogleProvider(AUTH_PROVIDERS.google),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {},
        password: {},
      },
      authorize,
    }),
  ],
  callbacks: {
    session: ({ session, token, trigger }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          fullName: token.fullName,
          paymentPlansId: token.paymentPlansId,
          cronicalDiseasesId: token.cronicalDiseasesId,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user, session, trigger }) => {
      if (trigger === 'update' && session) {
        return {
          ...token,
          ...session.user,
        };
      }

      if (!user) {
        return token;
      }

      return {
        ...token,
        id: user.id,
        fullName: (user as any).fullName,
        paymentPlansId: (user as any).paymentPlansId,
        cronicalDiseasesId: (user as any).cronicalDiseasesId,
        randomKey: (user as any).randomKey,
      };
    },
  },
});
