import { Box } from '@mui/material';
import React, { useState } from 'react';
import Star from './star';

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState(Math.random() * 5);
  const createArray = (length) => [...Array(length)];
  const totalStars = 5;
  return (
    <Box>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={Math.random() * 10}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
    </Box>
  );
};

export default StarRating;
