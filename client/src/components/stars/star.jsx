/* eslint-disable */
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const Star = ({ selected = false, onSelect }) => {
  return (
    <>
  {selected ? <StarIcon sx={{ color: 'orange' }}  onClick={onSelect}/> : <StarOutlineIcon sx={{ color: 'white' }} onClick={onSelect}/> }
    </>

)} // if value of selected is not present or false color grey will be used

export default Star;
