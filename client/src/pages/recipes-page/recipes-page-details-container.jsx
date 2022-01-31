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

    }}
    >
      {children}
    </Box>
  );
};

export default RecipesPageDetails;
