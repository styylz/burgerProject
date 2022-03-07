import React from 'react';
import { styled, Box } from '@mui/material';

const StyledDashboardLayoutMain = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    },
  }),
);

const DashboardLayoutMain = ({ children, ...props }) => (
  <StyledDashboardLayoutMain {...props} component="main">{children}</StyledDashboardLayoutMain>
);

export default DashboardLayoutMain;
