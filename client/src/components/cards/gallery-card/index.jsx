import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackgroundImageContainer from '../../containers/background-image-container';
import StarRating from '../../stars';

const BurgerGalleryCard = () => {
  console.log();
  return (
    <Grid item xs={12} sm={12} md={12} lg={4}>
      <BackgroundImageContainer sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.3)), url(https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg)',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: '38px 38px 38px 38px',
      }}
      >
        <Box sx={{
          width: '100%',
          height: '169px',
          backgroundColor: 'black',
          opacity: '0.8',
          borderRadius: '38px 38px 38px 38px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 9,
          position: 'relative',
        }}
        >
          <Box sx={{
            position: 'absolute',
            color: 'white',
            top: 60,
            right: 50,
          }}
          >
            <FavoriteBorderIcon sx={{
              fontSize: '2rem',
            }}
            />
          </Box>
          <Box sx={{
            position: 'absolute',
            color: 'white',
            top: 45,
            left: 20,
          }}
          >
            <AccessTimeIcon sx={{
              fontSize: '2rem',
            }}
            />
            <Box>
              <Typography sx={{ color: 'white', textAlign: 'center' }}>
                { Math.floor(Math.random() * 30)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography sx={{
              color: '#FF0F0F',
              fontSize: '1.4rem',
              textTransform: 'uppercase',
            }}
            >
              Lorem Burger Spicy
            </Typography>
            <Typography sx={{
              color: 'white',
              fontSize: '0.9rem',
            }}
            >
              This is fairly quick burger
            </Typography>
          </Box>
          <Box>
            <StarRating />
          </Box>

        </Box>
      </BackgroundImageContainer>
    </Grid>
  );
};

export default BurgerGalleryCard;
