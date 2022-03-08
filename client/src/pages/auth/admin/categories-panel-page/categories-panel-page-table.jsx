/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  Button,
  styled,
  TablePagination,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CachedIcon from '@mui/icons-material/Cached';
import CategoriesService from './services/categories-service';
import moment from 'moment';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CategoriesPanelPageTable = ({
  categories,
  onDelete,
  onEdit,
  count,
  rowsPerPage,
  setRowsPerPage,
  tablePage,
  setTablePage
}) => {
  const handleCategoryDelete = async (id) => {
    const deletedCategory = await CategoriesService.deleteCategory(id);

    if (typeof deletedCategory === 'string') {
      return;
    }
    onDelete(id);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
  };

  const handleChangePage = (_, newPage) => {
    setTablePage(newPage)
  };

   return  (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">CreatedAt:</StyledTableCell>
            <StyledTableCell align="right">UpdatedAt:</StyledTableCell>
            <StyledTableCell align="right">Actions:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((burgerCat) => (
            <TableRow
            key={burgerCat.id}
            >
              <StyledTableCell key={burgerCat.id} component="th" scope="row"  >
                {burgerCat.id}
              </StyledTableCell>
              <StyledTableCell >{burgerCat.category}</StyledTableCell>
              <StyledTableCell align="right">{moment(burgerCat.createdAt).format('LLL')}</StyledTableCell>
              <StyledTableCell align="right">{moment(burgerCat.updatedAt).format('LLL')}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  onClick={() => onEdit(burgerCat.id)}
                >
                  {burgerCat.edited ? <DoNotDisturbAltIcon /> : <CachedIcon />}

                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleCategoryDelete(burgerCat.id)}
                >
                  <DeleteForeverIcon />
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[3, 6, 9]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={tablePage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Categories Count:"
      />
    </TableContainer>
  );
};

export default CategoriesPanelPageTable;
