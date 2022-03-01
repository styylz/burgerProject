import React from 'react';
import {
  TextField,
  Paper,
  Button,
} from '@mui/material';

const CategoriesPanelPageForm = ({
  onSubmit, title, setTitle, editMode,
}) => (
  <Paper component="form" sx={{ display: 'flex' }} onSubmit={onSubmit}>
    <TextField
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      sx={{ flexGrow: 1 }}
      label={editMode ? 'Update' : 'Create Category'}
    />
    <Button
      type="submit"
      sx={{ color: `${editMode ? 'red' : 'black'}` }}
    >
      {editMode ? 'Update' : 'Create'}
    </Button>
  </Paper>
);

export default CategoriesPanelPageForm;
