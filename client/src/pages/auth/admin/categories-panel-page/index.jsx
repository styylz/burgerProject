import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import CategoriesPanelPageForm from './categories-panel-page-form';
import CategoriesPanelPageTable from './categories-panel-page-table';
import Api from '../../../../services/api-service';
import CategoriesService from './services/categories-service';

const CategoryPanelPage = () => {
  const [categories, setCategories] = useState([]);
  const [titleField, setTitleField] = useState('');
  const [editedCategoryId, setEditedCategoryId] = useState(null);

  const createCategory = async () => {
    const createdCategory = await CategoriesService.createCategory({ title: titleField });

    if (typeof createdCategory === 'string') {
      console.error(createdCategory);
      return;
    }

    setCategories([createdCategory, ...categories]);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((x) => x.id !== id));
    setEditedCategoryId(null);
    setTitleField('');
  };

  const editCategory = (id) => {
    const isNewCatergoryEdited = id !== editedCategoryId;
    setEditedCategoryId(isNewCatergoryEdited ? id : null);
    if (isNewCatergoryEdited) {
      const editedCategory = categories.find((x) => x.id === id);
      setTitleField(editedCategory.category);
    } else {
      setTitleField('');
    }
  };

  const updateCategory = async () => {
    if (editedCategoryId !== null) {
      // eslint-disable-next-line max-len
      const updatedCategory = await CategoriesService.updateCategory(editedCategoryId, { title: titleField });
      if (typeof updatedCategory === 'string') {
        console.error(updatedCategory);
        return;
      }

      setCategories(categories.map((x) => (x.id === editedCategoryId ? updatedCategory : x)));
      setTitleField('');
      setEditedCategoryId(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedCategoryId !== null) updateCategory();
    else createCategory();
  };

  useEffect(() => {
    (async () => {
      const fetchedCategories = await Api.getCategories();
      if (typeof fetchedCategories === 'string') {
        console.error(fetchedCategories);
        return;
      }

      setCategories(fetchedCategories);
    })();
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2">Categories panel</Typography>
      <Box sx={{ width: 600, mt: 4, mb: 2 }}>
        <CategoriesPanelPageForm
          onSubmit={handleSubmit}
          title={titleField}
          setTitle={setTitleField}
          editMode={Boolean(editedCategoryId)}
        />
      </Box>
      <CategoriesPanelPageTable
        categories={categories}
        onDelete={deleteCategory}
        onEdit={editCategory}
      />

    </Container>
  );
};

export default CategoryPanelPage;
