import React from 'react';
import { styled, Box } from '@mui/material';

const StyledDashboardLayoutMain = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    border: '1px solid red',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('md')]: {
      marginLeft: `-${theme.mixins.drawer.width}px`,
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
