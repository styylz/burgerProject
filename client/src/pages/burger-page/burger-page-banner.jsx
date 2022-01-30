import React from 'react';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const BurgerPageBanner = () => {
  console.log('');
  return (
    <BackgroundImageContainer sx={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.3)), url(https://i.ibb.co/bgfgY1d/T-3-01.jpg)',
      height: '60vh',
      mb: 3,
    }}
    />
  );
};

export default BurgerPageBanner;
