import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ProfilePageBoxLayout from './profile-page-box-layout';
import FavoriteCard from './profile-page-cards';

const ProfilePage = () => {
  console.log('');
  return (
    <Container
      maxWidth="xl"
      sx={(theme) => ({
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: `calc(100vh - ${theme.mixins.toolbar.height}px - ${theme.mixins.footer.height}px )`,
      })}
    >
      <Box sx={{ position: 'relative' }}>
        <Typography sx={{
          top: '-4.17vw',
          left: '-10.3vw',
          fontSize: '5vw',
          textTransform: 'uppercase',
          fontWeight: 500,
          position: 'absolute',
          zIndex: '9999',
        }}
        >
          Favorites
        </Typography>
        <ProfilePageBoxLayout sx={{ position: 'absolute' }}>

          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </ProfilePageBoxLayout>
      </Box>

    </Container>

  );
};

export default ProfilePage;
