import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  Divider,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import CategoryIcon from '@mui/icons-material/Category';
import routes from '../../../routing/routes';

import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawerLink from './dashboard-layout-drawer-link';

const navigationItems = {
  common: [
    { title: 'Profile', path: routes.ProfilePage, Icon: PersonIcon },
  ],
  admin: [
    { title: 'Burger Create', path: routes.DashBoardPage, Icon: HistoryIcon },
    { title: 'Categories', path: routes.DashboardCategoriesPanelPage, Icon: CategoryIcon },
  ],
};

const DashboardLayoutDrawer = ({
  open,
  handleDrawerClose,
  isSmallScreen,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: theme.mixins.drawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: theme.mixins.drawer.width,
          boxSizing: 'border-box',
        },
      }}
      variant={isSmallScreen ? 'persistent' : 'permanent'}
      anchor="left"
      open={open}
    >
      <DashboardLayoutDrawerHeader>
        {isSmallScreen && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        )}
      </DashboardLayoutDrawerHeader>
      <List>
        {navigationItems.common.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}
        <Divider />
        {navigationItems.admin.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

      </List>

    </Drawer>
  );
};

export default DashboardLayoutDrawer;
