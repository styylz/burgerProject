import { Box, Typography } from '@mui/material';
import React from 'react';

const RecipePageTitle = () => (
  <Box sx={{ pr: '15vw', pt: 5 }}>
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
      Lorem burger spicy
    </Typography>
    <Typography
      sx={{
        fontSize: '1.2rem',
        textTransform: 'uppercase',
      }}
    >
      Difficulty: crazy

    </Typography>
  </Box>
);

export default RecipePageTitle;
