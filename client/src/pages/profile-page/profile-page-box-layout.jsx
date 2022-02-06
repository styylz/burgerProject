import { Box, Paper } from '@mui/material';
import React from 'react';

const ProfilePageBoxLayout = ({ children }) => {
  console.log('');
  return (
    <Box sx={{
      backgroundColor: 'white',
      maxHeight: '70vh',
      width: '60vw',
      overflow: 'hidden',
      overflowY: 'scroll',
      '::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: '#F5F5F5',
      },
      '::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'nset 0 0 6px rgba(0,0,0,0.3)',
        bordeRadius: '10px',
        backgroundColor: '#F5F5F5',
      },
      '::-webkit-scrollbar-thumb': {
        bordeRadius: '10px',
        backgroundImage: '-webkit-linear-gradient(linear,left bottom,left top, color-stop(0.44, rgb(122 153,217)), color-stop(0.72, rgb(73,125,189)), color-stop(0.86, rgb(28,58,148)))',
        backgroundColor: 'black',
      },

    }}
    >
      <Paper
        elevation="1"
        sx={{
          position: 'sticky',
          backgroundColor: 'white',
          top: 0,
          zIndex: '999',
          height: '30px',
          width: '100%',
        }}
      />
      {children}
    </Box>
  );
};

export default ProfilePageBoxLayout;
