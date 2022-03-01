import {
  TextField,
  Grid,
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material';

import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Api from '../../../services/api-service';
import MultipleSelectGroup from './multipleSelectGroup';
import BurgerService from '../../../services/burger-service';

let id = 0;
const createId = () => {
  id += 1;

  return String(id);
};

const initialValues = {
  title: '',
  image: null,
  ingredients: [
    { id: createId(), ingredientId: '', amount: 0 },
  ],
  categories: '',
  cookingTime: '',
  steps: '',
};

const unselectedCategory = {
  id: '-1',
  category: 'Select Category',
  disabled: true,
};

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const fileUploadRef = useRef(null);

  const onSubmit = async (values) => {
    const image = fileUploadRef.current.files[0];
    await BurgerService.uploadBurger({
      ...values,
      image,
    });
  };

  const {
    handleChange,
    values,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit,
  });

  const addSelection = () => {
    setFieldValue(
      'ingredients',
      [...values.ingredients, { id: createId(), ingredientId: '', amount: 0 }],
      true,
    );
  };

  const deleteSelection = (fieldId) => {
    if (values.ingredients.length !== 1) {
      setFieldValue(
        'ingredients',
        values.ingredients.filter((item) => item.id !== fieldId),
        true,
      );
    } else {
      // eslint-disable-next-line no-alert
      throw new Error('Must be atleast one ingredient field');
    }
  };

  const handleSelectionIngrientChange = (selectId, ingriedienValue) => {
    const changeSelection = values.ingredients.find((selection) => selection.id === selectId);
    changeSelection.ingredientId = ingriedienValue;
    const newSelections = [...values.ingredients];
    setFieldValue(
      'ingredients',
      newSelections,
      true,
    );
  };

  const handleSelectionAmountChange = (amountId, amount) => {
    const changeSelection = values.ingredients.find((selection) => selection.id === amountId);
    changeSelection.amount = amount;
    const newSelectionsAmount = [...values.ingredients];
    setFieldValue(
      'ingredients',
      newSelectionsAmount,
      true,
    );
  };

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedIngredients] = await Promise.all([
        Api.getCategories(),
        Api.getIngredients(),
      ]);
      setCategories(fetchedCategories);
      setIngredients(fetchedIngredients);
    })();
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 300, m: 'auto', mt: 8 }}
    >
      <Typography variant="h2" sx={{ fontSize: 25, textAlign: 'center', mb: 5 }}>Create Burger</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="title"
            label="Title"
            onChange={handleChange}
            value={values.title}
            fullWidth
            variant="outlined"
          />
        </Grid>
        {/* Category */}
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              name="categories"
              labelId="demo-simple-select-label"
              value={values.categories}
              label="Categories"
              onChange={handleChange}
            >
              {[unselectedCategory, ...categories].map((category) => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                  disabled={category.disabled}
                >
                  {category.category}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
        </Grid>

        {/* //TODO: multiple select */}
        <Grid item xs={12} sm={12}>
          <MultipleSelectGroup
            ingredients={ingredients}
            selections={values.ingredients}
            add={addSelection}
            del={deleteSelection}
            change={handleSelectionIngrientChange}
            changeAmnt={handleSelectionAmountChange}
          />
        </Grid>
        {/* Cooking Time */}
        <Grid item xs={12} sm={12}>
          <TextField
            name="cookingTime"
            label="Cooking Time"
            onChange={handleChange}
            value={values.cookingTime}
            fullWidth
            variant="outlined"
          />
        </Grid>
        {/* Steps */}
        <Grid item xs={12} sm={12}>
          <TextField
            name="steps"
            label="Steps"
            onChange={handleChange}
            value={values.steps}
            fullWidth
            variant="outlined"
          />
        </Grid>
        {/* //TODO:Rating */}
        {/* fileUpload */}
        <Grid item xs={12} sm={12}>
          <Button
            variant="outlined"
            size="medium"
            sx={{ textTransform: 'none', color: 'black', width: 300 }}
            onClick={handleUploadFiles}
          >
            UPLOAD IMAGE
          </Button>
          <input
            type="file"
            name="file"
            hidden
            ref={fileUploadRef}
            accept=".jpg, .jpeg, .png"
          />
        </Grid>

        {/*  Button */}
        <Grid item xs={12} sm={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ height: 56, fontWeight: 'bold' }}
          >
            ADD BURGER
          </Button>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Dashboard;
