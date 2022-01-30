import {
  Box, Container, Grid,
} from '@mui/material';
import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BurgerPageTitle from './burger-page-title';
import BurgerGalleryCard from '../../components/cards/gallery-card';

const BurgerPageGallery = () => {
  console.log('');
  return (
    <Container
      maxWidth="xl"
      sx={{ border: '1px solid black' }}
    >
      <Box sx={{ display: 'flex' }}>

        <BurgerPageTitle />
        <Box sx={{
          width: ' 70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 'auto',
        }}
        >
          <FilterAltIcon sx={{ color: 'black', opacity: '0.8', fontSize: '2.2rem' }} />
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <BurgerGalleryCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <BurgerGalleryCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <BurgerGalleryCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <BurgerGalleryCard />
        </Grid>
      </Grid>

    </Container>

  );
};

export default BurgerPageGallery;
