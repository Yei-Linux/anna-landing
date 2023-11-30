import { Home } from './Platform/Home';
import { annaCareTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Fragment } from 'react';
export const AnnaCareWrapper = () => {
  return (
    <Fragment>
      <ThemeProvider theme={annaCareTheme}>
        <Home />
      </ThemeProvider>
    </Fragment>
  );
};
