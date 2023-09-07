import { createTheme } from '@mui/material';
import { defaultTheme } from 'react-admin';

export const adminTheme = createTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#494AF4',
    },
    secondary: {
      main: '#494AF4',
    },
  },
});
