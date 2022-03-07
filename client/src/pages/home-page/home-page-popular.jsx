import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BurgerCard from '../../components/cards';

const HomePagePopular = () => (
  <Container sx={{
    minHeight: {
      xs: '40vh',
      sm: '50vh',
      md: '50vh',
      lg: '60vh',
    },
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <Typography sx={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: {
          xs: '1.3rem',
          sm: '2.5rem',
          lg: '2.5rem',
        },
      }}
      >
        Popular
      </Typography>
    </Box>
    <Box>
      <BurgerCard />
      <BurgerCard />
    </Box>
  </Container>
);

export default HomePagePopular;
