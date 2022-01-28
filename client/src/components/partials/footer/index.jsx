import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: `${theme.mixins.footer.height}px` }}>
      footorislav
    </Box>
  );
};

export default Footer;
