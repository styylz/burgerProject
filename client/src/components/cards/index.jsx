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
  width: '20vw',
  height: '200px',
}));

const BurgerCard = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>

    <Card sx={{ display: 'flex' }}>
      <CardImage />
      <Box sx={{ px: 3, py: 2.5 }}>
        <Box sx={{ width: '100%', mb: 5 }}>
          <Typography sx={{
            color: '#FF0F0F',
            fontSize: '2.1rem',
            textTransform: 'uppercase',
          }}
          >
            Lorem Burger Spicy
          </Typography>
          <Typography sx={{
            color: 'white',
            fontSize: '1.2rem',
          }}
          >
            This is fairly quick burger
          </Typography>
        </Box>
        <Box sx={{ width: '300px' }}>
          <StarRating />
        </Box>
      </Box>
    </Card>
  </Box>

);

export default BurgerCard;
