import {
  Box, Button, styled, Typography,
} from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import StarRating from '../../components/stars';

const Circle = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://media.istockphoto.com/photos/quinoa-burger-picture-id180698736?s=612x612)',
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'contain',
  width: '17vw',
  height: '17vw',

  [theme.breakpoints.up('md')]: {
    width: '13vw',
    height: '13vw',
  },

  [theme.breakpoints.up('lg')]: {
    width: '10vw',
    height: '10vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '7vw',
    height: '7vw',
  },
}));

const FavoriteCard = () => (
  <Box sx={{
    height: '20vh',
    display: 'flex',
    alignItems: 'center',
    px: 2,
    mx: 2,
    mt: 2,
    backgroundColor: 'rgba(196, 196, 196,0.13)',
  }}
  >
    <Circle />
    <Box sx={{
      width: '80%',
      alignSelf: 'stretch',
      pt: 3,
      ml: 2,
    }}
    >
      <Typography sx={{
        color: '#FF0F0F',
        fontSize: {
          xs: '3.5vw',
          md: '3vw',
          lg: '2vw',
        },
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
      >
        Lorem burger spicy
      </Typography>
      <StarRating />

      <Button
        variant="outlined"
        size="small"
        color="error"
        sx={{
          alignText: 'right',
          width: {
            xs: '5%',
          },
          height: {
            xs: '20%',
          },
        }}
      >
        <ClearIcon />
      </Button>
    </Box>

  </Box>
);

export default FavoriteCard;
