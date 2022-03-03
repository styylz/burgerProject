import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardLayoutAppBaras from './dashboard-layout/dashboard-layout-appbar1';
import DashboardLayoutDrawer from './dashboard-layout/dashboard-layout-drawer1';
import DashboardLayoutDrawerHeader from './dashboard-layout/dashboard-layout-drawer-header';
import DashboardLayoutMain from './dashboard-layout/dasboard-layout-main';

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(({ breakpoints }) => breakpoints.down('md'));

  const handleDrawerToggle = () => setOpen(!open);
  const theme = useTheme();
  const containerWidth = `calc(100vw - ${theme.mixins.drawer.width}px)`;

  console.log(containerWidth);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      // minWidth: {},
      marginLeft: 15,
    }}
    >
      {/* <Navbar /> */}
      <DashboardLayoutAppBaras
        position="fixed"
        open={open}
      />
      <DashboardLayoutDrawer
        open={open}
        handleDrawerClose={handleDrawerToggle}
        isSmallScreen={isSmallScreen}
      />
      <DashboardLayoutMain open={open}>
        <DashboardLayoutDrawerHeader />
        <Outlet />
      </DashboardLayoutMain>

      {isSmallScreen && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          size="large"
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            mr: 2,
            bgcolor: 'primary.light',
            borderRadius: theme.shape.borderRadius,
            ':hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <MenuIcon sx={{ color: 'common.white' }} />
        </IconButton>
      )}
    </Box>
  );
};
export default AdminLayout;
