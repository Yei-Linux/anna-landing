import { SessionProvider } from 'next-auth/react';
import FlagsmithProviderCustom from '../../providers/Flagsmith';
import flagsmith from 'flagsmith/isomorphic';
import { IState } from 'flagsmith/types';
import { useEffect, useState } from 'react';

interface TProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: TProviders) => {
  const ENVIRONMENT_ID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENTID;
  const IDENTITY = process.env.NEXT_PUBLIC_FLAGSMITH_IDENTITY;

  const [flagsmithState, setFlagsmithState] = useState<
    IState<string, string> | undefined
  >(undefined);
  const fetchFlagsmith = async () => {
    if (!ENVIRONMENT_ID || !IDENTITY) return;

    const flagsmithStateResponse = await flagsmith
      .init({
        environmentID: ENVIRONMENT_ID,
        identity: IDENTITY,
      })
      .then(() => {
        return flagsmith.getState();
      });

    setFlagsmithState(flagsmithStateResponse);
  };

  useEffect(() => {
    fetchFlagsmith();
  }, []);

  return (
    <FlagsmithProviderCustom flagsmithState={flagsmithState}>
      <SessionProvider>{children}</SessionProvider>
    </FlagsmithProviderCustom>
  );
};
