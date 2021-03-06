import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const StyledLink = styled(Link)({
  textTransform: 'capitalize',
  fontWeight: '900',
  textDecoration: 'none',
  color: 'white',
  transform: 0,
  width: '100%',
  height: '100%',
  m: 0,
});

const HomePageBanner = () => (
  <Box sx={() => ({
    height: {
      xs: '40vh',
      sm: '50vh',
      md: '60vh',
      lg: '65vh',
    },
  })}
  >
    <BackgroundImageContainer sx={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.9)) , url(https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }}
    >
      <Box sx={{
        position: 'absolute',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      >
        <Box sx={{ mb: 5, width: '60vw' }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: 'medium',
              color: '#FFC20A',
              fontSize: {
                xs: '4vw',
                sm: '3vw',
                md: '3vw',
                lg: '3vw',
              },

            }}
          >
            My brain screams exercise, but my heart whispers cheeseburger.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              width: '25vw',
              fontSize: {
                xs: '3vw',
                sm: '2.5vw',
                md: '1.5vw',
                lg: '1.5vw',
              },
              '&:hover': {
                transition: '0.5s',
                transform: 'translateY(5px)',
              },
              fontWeight: 'Bold',
            }}
            variant="contained"
            size="large"
            color="error"
          >
            <StyledLink
              to="/burgers"
            >
              EXPLORE
            </StyledLink>
          </Button>
        </Box>
      </Box>
    </BackgroundImageContainer>
  </Box>
);

export default HomePageBanner;
