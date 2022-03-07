import { Box, Typography } from '@mui/material';
import React from 'react';

const RecipePageTitle = ({ title }) => (
  <Box sx={{
    width: '90%',
    backgroundColor: 'orange',
    borderRadius: '10px',
    mt: 5,
  }}
  >
    <Typography
      sx={{
        fontSize: {
          xs: '10vw',
          sm: '5.5vw',
          lg: '3.9vw',
          xl: '3vw',
        },
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
      }}
    >
      {title?.title}
    </Typography>

  </Box>
);

export default RecipePageTitle;
