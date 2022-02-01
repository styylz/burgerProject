import { Box } from '@mui/material';
import React from 'react';

const ProfilePageBoxLayout = ({ children }) => {
  console.log('');
  return (
    <Box sx={{
      backgroundColor: 'white',
      maxHeight: '70vh',
      border: '1px solid black',
      width: 900,
      overflow: 'hidden',
      overflowY: 'scroll',

    }}
    >
      {children}
    </Box>
  );
};

export default ProfilePageBoxLayout;
