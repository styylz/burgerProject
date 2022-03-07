import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import StarRating from '../stars';

const Card = styled(Box)(() => ({
  width: '90%',
  backgroundColor: 'black',
  borderRadius: '10px',
  marginBottom: 17,
}));

const CardImage = styled(Box)(() => ({
  backgroundImage: ' url(https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg)',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'contain',
  width: '30%',
  height: '200px',
  padding: '4vw 0',
}));

const BurgerCard = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <CardImage />
      <Box sx={{
        width: '60%',
        pl: '1vw',
      }}
      >
        <Box sx={{ width: '100%', mb: 5 }}>
          <Typography sx={{
            color: '#FF0F0F',
            fontSize: {
              xs: '4vw',
              sm: '2.5vw',
              md: '2.5vw',
              lg: '1.7vw',
            },
            textTransform: 'uppercase',
          }}
          >
            Lorem Burger Spicy
          </Typography>
          <Typography sx={{
            color: 'white',
            fontSize: {
              xs: '3vw',
              sm: '2.5vw',
              md: '1.5vw',
              lg: '1.2vw',
            },
          }}
          >
            This is fairly quick burger
          </Typography>
        </Box>
        <Box sx={{ }}>
          <StarRating />
        </Box>
      </Box>
    </Card>
  </Box>

);

export default BurgerCard;
