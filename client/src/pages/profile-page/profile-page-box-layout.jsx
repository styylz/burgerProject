import { Box } from '@mui/material';
import React from 'react';

const ProfilePageBoxLayout = ({ children }) => {
  console.log('');
  return (
    <Box sx={{
      backgroundColor: 'white',
      width: '80%',
      height: '70vh',
    }}
    >
      {children}
    </Box>
  );
};

export default ProfilePageBoxLayout;
