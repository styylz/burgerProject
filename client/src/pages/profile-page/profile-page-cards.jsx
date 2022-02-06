import {
  Box, Button, styled, Typography,
} from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import StarRating from '../../components/stars';

const Circle = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://media.istockphoto.com/photos/quinoa-burger-picture-id180698736?s=612x612)',
  borderRadius: '50%',
  width: 100,
  height: 100,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'contain',
  [theme.breakpoints.up('md')]: {
    width: 150,
    height: 150,
  },
}));

const FavoriteCard = () => {
  console.log('');
  return (
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
          fontSize: '2.1rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
        >
          Lorem burger spicy
        </Typography>
        <Typography sx={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          mb: 1.5,
        }}
        >
          Difficulty: Hard
        </Typography>
        <StarRating />

        <Button variant="outlined" size="small" color="error" sx={{ alignText: 'right' }}>
          <ClearIcon />
        </Button>
      </Box>

    </Box>
  );
};

export default FavoriteCard;
