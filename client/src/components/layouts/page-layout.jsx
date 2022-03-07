import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// Mano
import { useTheme } from '@emotion/react';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const PageLayout = () => {
  const theme = useTheme();
  return (
    <Box>
      <Navbar />
      <Box
        component="main"
        sx={{ minHeight: `calc(100vh - ${theme.mixins.toolbar.height}px - ${theme.mixins.footer.height}px  )` }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default PageLayout;
