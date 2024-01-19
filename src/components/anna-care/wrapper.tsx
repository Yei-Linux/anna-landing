import { useFlags } from 'flagsmith/react';
import { Home } from './Platform/Home';
import { annaCareTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Fragment, useEffect } from 'react';
import { useLandingBotStore } from '../../store';
export const AnnaCareWrapper = () => {
  const { initFlags } = useLandingBotStore();
  const flags = useFlags(['signup_controller']);

  useEffect(() => {
    initFlags(flags);
  }, [flags]);

  return (
    <Fragment>
      <ThemeProvider theme={annaCareTheme}>
        <Home />
      </ThemeProvider>
    </Fragment>
  );
};
