import {
  Box, Container, Typography, styled, Input, Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useRef, useState } from 'react';
import CircleImageContainer from '../../components/containers/circle-image-container';
import ImageService from '../../services/image-service';

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
  width: 65%;
  font-size: 1.1rem;
  font-family: Roboto;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);
  padding: 20px 20px;
  transition: all 150ms ease;
  letter-spacing: 1.20px;
  background: white;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    color: black;
  }

  &:focus {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }
`,
);

const HomePageBody = ({ image }) => {
  const [imgData, setImgData] = useState([]);
  console.log(imgData);
  const updateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  // const handleImageDelete = async (id) => {
  //   await ImageService.deleteImage(id);
  //   setImgData(imgData.filter((x) => x.id !== id));
  // };

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ImageService.getImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ImageService.uploadImages(input.files);
    updateImgData(data);
  };

  return (
    <Container sx={{
      minHeight: {
        xs: '40vh',
        sm: '50vh',
        md: '60vh',
        lg: '60vh',
      },
    }}
    >
      <Box sx={{ marginBottom: 7, mt: 6 }}>
        <Typography sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: {
            xs: '1.1rem',
            sm: '1.5rem',
            lg: '2.5rem',
          },
        }}
        >
          {' '}
          Hey, Choose the best burger...

        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center', marginBottom: 9 }}>
        <StyledInputElement placeholder="Find a recipe" endAdornment={<SearchIcon />} sx={{ textTransform: 'uppercase' }} />

      </Box>
      <Box sx={{
        display: 'flex', justifyContent: 'space-evenly',
      }}
      >
        {image.map((burger) => (
          <CircleImageContainer src={burger.src}>
            <Typography sx={{ fontSize: '1.3rem' }}>
              {burger.title}
            </Typography>
          </CircleImageContainer>
        ))}
      </Box>

      <Button
        variant="outlined"
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={handleUploadFiles}
      >
        UPLOAD IMAGES
      </Button>
      <input
        type="file"
        hidden
        ref={fileUploadRef}
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={handleImagesLoaded}
      />

    </Container>
  );
};

export default HomePageBody;
