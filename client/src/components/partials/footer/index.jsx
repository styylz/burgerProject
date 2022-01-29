import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      height: `${theme.mixins.footer.height}px`,
    }}
    >
      <Box sx={{
        backgroundColor: '#fffefb', height: `${theme.mixins.footer.height}px`, display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Typography sx={{ verticalAlign: 'middle' }}>
          ALL BURGERS ARE RESERVED / 2021
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
