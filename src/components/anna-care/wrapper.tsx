import { useFlags } from 'flagsmith/react';
import { Home } from './Platform/Home';
import { annaCareTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Fragment, useEffect } from 'react';
import { useLandingBotStore } from '../../store';
export const AnnaCareWrapper = () => {
  const { initFlags } = useLandingBotStore();
  const isWaitlistEnable = process.env.NEXT_PUBLIC_IS_WAITLIST_PHASE === '1';

  useEffect(() => {
    initFlags({
      signup_controller: {
        id: 72063,
        enabled: !isWaitlistEnable,
      },
    } as any);
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={annaCareTheme}>
        <Home />
      </ThemeProvider>
    </Fragment>
  );
};
