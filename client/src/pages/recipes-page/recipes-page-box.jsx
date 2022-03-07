import { Box, Typography } from '@mui/material';
import React from 'react';

const RecipesPageBox = ({
  children, properties, title, usePadding, top, left,
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
      position: 'relative',
    }}
    >
      <Typography
        component="h3"
        variant="h2"
        sx={{
          top: `${top}`,
          left: `${left}`,
          textTransform: 'uppercase',
          fontWeight: 500,
          position: 'absolute',
          zIndex: '9999',
          fontSize: {
            xs: '9.1vw',
            sm: '7.5vw',
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
