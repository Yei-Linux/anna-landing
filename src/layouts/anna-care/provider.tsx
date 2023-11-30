import { SessionProvider } from 'next-auth/react';

interface TProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: TProviders) => {
  return <SessionProvider>{children}</SessionProvider>;
};
