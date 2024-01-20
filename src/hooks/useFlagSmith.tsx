import flagsmith from 'flagsmith';
import { IState } from 'flagsmith/types';
import { useState, useEffect } from 'react';

const valuesFlagsmith = () => {
  const enabled = process.env.NEXT_PUBLIC_IS_WAITLIST_PHASE;

  return {
    flags: [
      {
        feature: {
          id: 72063,
          name: 'signup_controller',
          type: 'STANDARD',
        },
        enabled: enabled === '0',
        feature_state_value: null,
      },
    ],
    traits: [],
  } as unknown as IState<string, string>;
};

export const useFlagsmith = () => {
  const ENVIRONMENT_ID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENTID;
  const IDENTITY = process.env.NEXT_PUBLIC_FLAGSMITH_IDENTITY;

  const [flagsmithState, setFlagsmithState] = useState<
    IState<string, string> | undefined
  >(undefined);
  const fetchFlagsmith = async () => {
    if (!ENVIRONMENT_ID || !IDENTITY) return;

    try {
      const flagsmithStateResponse = await flagsmith
        .init({
          environmentID: ENVIRONMENT_ID,
          identity: IDENTITY,
        })
        .then(() => {
          return flagsmith.getState();
        })
        .catch(() => {
          return valuesFlagsmith();
        });

      setFlagsmithState(flagsmithStateResponse);
    } catch (error) {
      setFlagsmithState(valuesFlagsmith());
    }
  };

  useEffect(() => {
    fetchFlagsmith();
  }, []);

  return { flagsmithState };
};
