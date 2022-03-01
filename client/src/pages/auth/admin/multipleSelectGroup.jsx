import { Box } from '@mui/material';
import React from 'react';
import SelectGroup from './selectGroup';

const MultipleSelectGroup = ({
  ingredients, selections, add, del, change, changeAmnt,
}) => (
  <Box>
    {selections.map((x) => (
      <SelectGroup
        key={x.id}
        ingredients={ingredients}
        state={x}
        add={add}
        del={del}
        change={change}
        changeAmnt={changeAmnt}
      />
    ))}

  </Box>
);
export default MultipleSelectGroup;
