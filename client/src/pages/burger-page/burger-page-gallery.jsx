import {
  Box, Button, Container, Grid,
} from '@mui/material';
import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BurgerPageTitle from './burger-page-title';
import BurgerGalleryCard from '../../components/cards/gallery-card';
import BurgerPageDrawer from './burger-page-drawer';

const BurgerPageGallery = ({ open, ...props }) => {
  console.log('');
  return (
    <Container
      maxWidth="xl"
    >
      <Box sx={{ display: 'flex' }}>
        <BurgerPageTitle />
        <Box sx={{
          width: ' 70%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 'auto',
        }}
        >
          <Button onClick={open}>
            <FilterAltIcon sx={{
              color: 'black',
              opacity: '0.8',
              fontSize: '2.2rem',
            }}
            />
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
        }}
      >
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
        <BurgerGalleryCard />
      </Grid>
      <BurgerPageDrawer drawerHandler={props} />
    </Container>

  );
};

export default BurgerPageGallery;
