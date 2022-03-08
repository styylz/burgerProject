import {
  Box, Button, Paper, styled, Typography,
} from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  width: '12vw',
  [theme.breakpoints.up('sm')]: {
    width: '9vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '5vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '5vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '3vw',
  },
}));

const RecipesPageCounter = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
  }}
  >
    <Paper
      elevation={3}
      sx={{ display: 'flex' }}
    >
      <Paper elevation={3}>
        <StyledButton
          color="warning"
          variant="contained"
          sx={{}}
        >
          -1

        </StyledButton>
      </Paper>
      <Box sx={{
        width: '3vw',
        pt: 0.8,
      }}
      >

        <Typography sx={{
          textAlign: 'center',
          pt: 0.5,
        }}
        >
          0

        </Typography>
      </Box>
      <Paper elevation={3}>
        <StyledButton
          color="warning"
          variant="contained"
        >
          +1

        </StyledButton>
      </Paper>
    </Paper>

  </Box>
);

export default RecipesPageCounter;
