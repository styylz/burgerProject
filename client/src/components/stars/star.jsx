/* eslint-disable */
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const Star = ({ selected = false, onSelect, }) => {
  return (
    <>
      {selected ? (
        <StarIcon
          sx={{
            color: 'orange',
            fontSize: {
              xs: '6vw',
              sm: '3vw',
              lg: '1.5vw',
            },
          }}
          onClick={onSelect}
        />
      ) : <StarOutlineIcon  sx={{
        color: 'white',
        fontSize: {
          xs: '6vw',
          sm: '3vw',
          lg: '1.5vw',
        },
      }} onClick={onSelect} /> }
    </>

  );
};

export default Star;
