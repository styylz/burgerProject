import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { lightTheme } from './styles/theme';
import store from './store';
import PageRouter from './routing/page-router';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
