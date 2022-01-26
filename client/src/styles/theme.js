import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFEFB',
      common: '#00000',
    },
    secondary: {
      main: '#d2583e',
    },
    background: {
      default: '#00000',
    },
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      color: 'red',
    },
  },
});

export const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      minHeight: 0,
      height: 64,
      [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 0,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: 0,
      },
    },
    footer: {
      height: 64,
    },
  },
  shadows: [
    ...theme.shadows,
    '0 0 2em 0px rgba(0, 0, 0, 0.4)',
    '0 0 0 1px #ddd',
  ],
  transitions: {
    easeMe: 'all 0.2s ease-out',
  },
});

export default lightTheme;
