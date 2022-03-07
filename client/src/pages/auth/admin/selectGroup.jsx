import React from 'react';
import {
  Box,
  Button,
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';

const unselectedIngredient = {
  id: '-1',
  title: 'Select Ingredient',
  amount: 0,
  disabled: true,
};

const SelectGroup = ({
  ingredients, state, add, del, change, changeAmnt,
}) => (
  <>
    <Box sx={{ display: 'flex' }}>
      <FormControl fullWidth sx={{ mr: '1%' }}>
        <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
        <Select
          name="title"
          labelId="demo-simple-select-label"
          value={state.ingredientId}
          label="Ingredients"
          onChange={(e) => change(state.id, e.target.value)}
        >
          {[unselectedIngredient, ...ingredients].map((ingredient) => (
            <MenuItem
              key={ingredient.id}
              value={ingredient.id}
              disabled={ingredient.disabled}
            >
              {ingredient.title}
            </MenuItem>
          ))}

        </Select>
      </FormControl>

      <TextField
        name="amount"
        label="Amount"
        value={Number(state.amount)}
        onChange={(e) => changeAmnt(state.id, Number(e.target.value))}
        sx={{ width: '30%' }}
        variant="outlined"
      />

    </Box>
    <Box>
      <Button onClick={add}>Add</Button>
      <Button onClick={() => del(state.id)}>X</Button>
    </Box>
  </>
);

export default SelectGroup;
