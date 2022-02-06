/*eslint-disable */
import { Box, styled } from '@mui/material';
import React from 'react';

const StyledContainer = styled(Box)(({}) => ({
  scrollbarWidth: 'none',
  overflowY: 'scroll',

  '& webkitScrollbar': {
    display: 'none'
  },
}));

const RecipesPageDetails = ({ children }) => {
  return (
    <Box sx={{
      width: '100vw',
      minHeight: '90vh',
      maxHeight: {
        xs: 'none',
        lg: '70vh'
      },
      overflowY: {
        xs: 'visible',
        lg: 'scroll'
      },
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      scrollbarWidth: {
        xs: 'none',
        lg: 'none'
      },
      '::-webkit-scrollbar': {
        width: '15px',
        backgroundColor: '#F5F5F5',
      },
      '::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'nset 0 0 6px rgba(0,0,0,0.3)',
        bordeRadius: '10px',
        backgroundColor: '#F5F5F5',
      },
      '::-webkit-scrollbar-thumb': {
        bordeRadius: '10px',

        backgroundImage: '-webkit-linear-gradient(90deg, rgba(252,74,26,1) 0%, rgba(247,183,51,1) 100%)',
      },

    }}
    >
      {children}
    </Box>
  );
};

export default RecipesPageDetails;
