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
            primaryTypographyProps={{
              fontSize: {
                xs: '4.5vw',
                sm: '3vw',
                md: '2vw',
                lg: '1.3vw',
                xl: '1.3vw',
              },
            }}
          >
            {`${title}`}
          </ListItemText>
          <Typography sx={{
            fontSize: {
              xs: '4.5vw',
              sm: '3vw',
              md: '2vw',
              lg: '1.3vw',
              xl: '1.3vw',
            },
          }}
          >
            {amount}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default RecipesPageIngredientsList;
