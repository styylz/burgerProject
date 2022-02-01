import { Box, Container } from '@mui/material';
import React from 'react';
import ProfilePageBoxLayout from './profile-page-box-layout';

const ProfilePage = () => {
  console.log('');
  return (
    <Container
      maxWidth="xl"
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `calc(100vh - ${theme.mixins.toolbar.height}px - ${theme.mixins.footer.height}px )`,
      })}
    >

      <ProfilePageBoxLayout>
        <Box sx={{ height: '20vh', border: '1px solid red' }}> A</Box>
        <Box sx={{ height: '20vh', border: '1px solid red' }}> A</Box>
        <Box sx={{ height: '20vh', border: '1px solid red' }}> A</Box>
        <Box sx={{ height: '20vh', border: '1px solid red' }}> A</Box>
        <Box sx={{ height: '20vh', border: '1px solid red' }}> A</Box>
      </ProfilePageBoxLayout>

    </Container>

  );
};

export default ProfilePage;
