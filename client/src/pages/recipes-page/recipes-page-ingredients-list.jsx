import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText, Typography } from '@mui/material';

const RecipesPageIngredientsList = ({ ingredients }) => {
  if (ingredients === undefined) return null;
  return (
    <List>
      {ingredients.map(({ title, amount }) => (
        <ListItem
          disableGutters
          disablePadding
          divider
          alignItems="center"
          key={title}
          sx={{
            margin: 0,
            padding: '2% 20% 0% 20%',
          }}
        >
          <ListItemText
            primaryTypographyProps={{ fontSize: '1.4rem' }}
          >
            {`${title}`}
          </ListItemText>
          <Typography sx={{ fontSize: '1.4rem' }}>
            {amount}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default RecipesPageIngredientsList;
