/* eslint-disable */
import {
  Box, Container, Typography, styled, TextField, Input,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const blue = {
  200: '#80BFFF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled(Input)(
  ({ theme }) => `
  height: 60px;
  width: 50%;
  font-size: 1.1rem;
  font-family: Roboto;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  padding: 20px 20px;
  transition: all 150ms ease;
  letter-spacing: 1.20px;
  background: ${theme.palette.mode === 'dark' ? '' : grey[100]};

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
  }

  &:focus {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }
`,
);

const Home = () => (
  <Container sx={{ border: '1px solid black', minHeight: '70vh' }}>
    <Box>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}> Hey, Choose the best burger...</Typography>
    </Box>
    <Box sx={{ textAlign: 'center' }}>
    <StyledInputElement placeholder="Hello world" endAdornment={<SearchIcon/>} />

    </Box>
    <Box sx={{ margin: 'auto', display: 'flex', alignItems: 'center' }}>
      <Box sx={{
        border: '1px solid black', borderRadius: '50%', width: '50px', height: '50px',
      }}
      />
      <Box sx={{
        border: '1px solid black', borderRadius: '50%', width: '50px', height: '50px',
      }}
      />
      <Box sx={{
        border: '1px solid black', borderRadius: '50%', width: '50px', height: '50px',
      }}
      />
    </Box>

  </Container>
);

export default Home;
