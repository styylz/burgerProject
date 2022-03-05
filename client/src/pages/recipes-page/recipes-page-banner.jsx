import React from 'react';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const RecipesBanner = ({ bannerImage }) => {
  if (bannerImage === undefined) return null;

  console.log(bannerImage?.image);
  return (
    <BackgroundImageContainer
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.3)), url(${bannerImage?.image}) `,
        height: {
          xs: '40vh',
          md: '65vh',
          lg: '90vh',
        },
        width: {
          xs: '100vw',
          md: '100vw',
          lg: '70vw',
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default RecipesBanner;
