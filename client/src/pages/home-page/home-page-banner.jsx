import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const link = 'https://assets-global.website-files.com/5f57196756ffac822737c502/5faae813f7c784e6b99ad001_Meat%20Analogue%20Case%20Study.jpg';

const StyledInputElement = styled('img')(() => `

width: 100%;
object-fit: contain;
border-radius: '18px'
`);

const HomePageBanner = () => {
  console.log('hi');
  return (
    <Box sx={{ borderRadius: '18px', position: 'relative' }}>
      <StyledInputElement alt="hello" src={`${link}`} />
    </Box>
  );
};

export default HomePageBanner;
