import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItemText } from '@mui/material';

function generate(element) {
  return [0, 1, 2, 4, 5, 6, 7]
    .map((value) => React.cloneElement(element, {
      key: value,
    }));
}

const RecipesPageIngredientsList = () => {
  // eslint-disable-next-line no-unused-vars
  const [dense, setDense] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Box>
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <FiberManualRecordIcon sx={{ fontSize: '0.9rem' }} />
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>,
        )}
      </List>
    </Box>
  );
};

export default RecipesPageIngredientsList;
