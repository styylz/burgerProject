/*eslint-disable*/
import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CategoriesPanelPageForm from './categories-panel-page-form';
import CategoriesPanelPageTable from './categories-panel-page-table';
import Api from '../../../../services/api-service';
import CategoriesService from './services/categories-service';
// import { useSearchParams } from 'react-router-dom';
// import { createUrlParamObj } from '../../../../components/helpers/url-helpers';

const CategoryPanelPage = () => {
  const [categories, setCategories] = useState([]);
  const [titleField, setTitleField] = useState('');
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const [categoriesLen, setCategoriesLength] = useState(-1)
  // eslint-disable-next-line no-unused-vars
  // const [searchParams] = useSearchParams();
  // const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(3)
  const [tablePage, setTablePage] = useState(0)
  const [loading, setLoading] = useState(true)

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

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  const getData = async () => {
    setLoading(true);
    const {data, dataLength} = await Api.getCategoriesPaginated(tablePage + 1, rowsPerPage);
    setCategories(data);
    setCategoriesLength(dataLength);
    setLoading(false);
  }

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    getData()
  }, [tablePage, rowsPerPage])

  // (async () => {
  //   const {data} = await Api.getCategoriesPaginated({tablePage, rowsPerPage});
  //   setCategories(data);
  // })();

  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2">Categories panel</Typography>
      <Box sx={{mt: 4, mb: 2 }}>
        <CategoriesPanelPageForm
          onSubmit={handleSubmit}
          title={titleField}
          setTitle={setTitleField}
          editMode={Boolean(editedCategoryId)}
        />
      </Box>
      {!loading ?
         <CategoriesPanelPageTable
         categories={categories.map((x) => ({ ...x, edited: editedCategoryId === x.id }))}
         onDelete={deleteCategory}
         onEdit={editCategory}
         rowsPerPage={rowsPerPage}
         setRowsPerPage={setRowsPerPage}
         tablePage={tablePage}
         setTablePage={setTablePage}
         // onChangePage={handleChangePage}
         count={categoriesLen}
       /> : null
    }
    </Container>
  );
};

export default CategoryPanelPage;
