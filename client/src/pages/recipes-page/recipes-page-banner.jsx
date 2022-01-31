import React from 'react';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const RecipesBanner = () => {
  console.log('');
  return (
    <BackgroundImageContainer
      sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)',
        height: {
          xs: '40vh',
          md: '65vh',
          lg: '90vh',
        },
        width: {
          xs: '100vw',
          md: '100vw',
          lg: '65vw',
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default RecipesBanner;
