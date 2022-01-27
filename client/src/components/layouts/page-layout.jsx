import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// Mano
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const PageLayout = () => (
  <Box>
    <Navbar />
    <Box component="main" sx={{ marginTop: '62px' }}>
      <Outlet />
    </Box>
    <Footer>Footer</Footer>
  </Box>
);

export default PageLayout;
