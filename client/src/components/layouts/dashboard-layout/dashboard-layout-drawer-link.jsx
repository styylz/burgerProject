import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const DashboardLayoutDrawerLink = ({
  Icon,
  path,
  title,
}) => {
  const navigate = useNavigate();

  return (
    <ListItem button onClick={() => navigate(path)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default DashboardLayoutDrawerLink;
