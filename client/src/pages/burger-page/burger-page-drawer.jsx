import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const BurgerPageDrawer = ({ drawerHandler }) => {
  const { drawerStatus, close } = drawerHandler;
  const list = (
    <Box
      sx={() => ({
        background: 'none',
        width: 250,
      })}
      role="presentation"
      elevation={0}
      onClick={close}
    >
      <List>
        {['Meat Type', 'Ingredients', 'Ratings', 'Difficulty'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <Drawer
      open={drawerStatus}
      onClose={close}
    >
      {list}
    </Drawer>
  );
};
export default BurgerPageDrawer;
