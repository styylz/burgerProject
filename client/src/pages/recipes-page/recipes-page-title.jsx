import { Box, Typography } from '@mui/material';
import React from 'react';

const RecipePageTitle = ({ title }) => {
  console.log(title?.title);
  return (
    <Box sx={{
      pr: '15vw',
      pt: 5,
    }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '1.1rem',
            sm: '1.5rem',
            lg: '2.3rem',
          },
          textTransform: 'uppercase',
        }}
      >
        {title?.title}
      </Typography>

    </Box>
  );
};

export default RecipePageTitle;
