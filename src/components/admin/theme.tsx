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
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#494AF4',
            color: 'white',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#494AF4',
            color: 'white',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#494AF4',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        InputLabelProps: { shrink: true },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: 'none !important',
          },
          '&::after': {
            borderBottom: 'none',
          },
        },
        input: {
          padding: '8px 20px',
          background: '#f6f6f6',
          borderRadius: '10px',
          fontSize: '15px',
        },
      },
    },
  },
});
