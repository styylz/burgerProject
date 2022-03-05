import { Box, Typography } from '@mui/material';
import React from 'react';

const RecipesPageBox = ({
  children, properties, title, usePadding,
}) => (
  <Box sx={{
    padding: usePadding ? '4%' : '0px',
    backgroundColor: 'white',
    width: {
      xs: '60vw',
      md: '50vw',
      lg: '29vw',

    },
    marginTop: '90px',
    position: 'relative',
    ...properties,
  }}
  >
    <Box sx={{
      position: 'absolute', top: -50, left: -50,
    }}
    >
      <Typography
        component="h3"
        variant="h2"
        sx={{
          textTransform: 'uppercase',
          fontSize: {
            xs: '1.1rem',
            sm: '4.5vw',
            lg: '3.9vw',
          },
        }}
      >
        {title}

      </Typography>
    </Box>
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      minHeight: '65vh',
      justifyContent: 'start',
      alignItems: 'left',
    }}
    >
      {children}

    </Box>
  </Box>
);

export default RecipesPageBox;
