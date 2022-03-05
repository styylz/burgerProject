import { Box } from '@mui/material';
import React from 'react';

const RecipesPageDetails = ({ children }) => (
  <Box sx={{
    width: '100vw',
    minHeight: '90vh',
    maxHeight: {
      xs: 'none',
      lg: '70vh',
    },
    overflowY: {
      xs: 'visible',
      lg: 'scroll',
    },
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    scrollbarWidth: {
      xs: 'none',
      lg: 'none',
    },
    '::-webkit-scrollbar': {
      width: '15px',
      backgroundColor: '#F5F5F5',
    },
    '::-webkit-scrollbar-track': {
      webkitBoxShadow: 'nset 0 0 6px rgba(0,0,0,0.3)',
      borderRadius: '10px',
      backgroundColor: '#F5F5F5',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',

      backgroundImage: '-webkit-linear-gradient(90deg, rgba(252,74,26,1) 0%, rgba(247,183,51,1) 100%)',
    },

  }}
  >
    {children}
  </Box>
);

export default RecipesPageDetails;
