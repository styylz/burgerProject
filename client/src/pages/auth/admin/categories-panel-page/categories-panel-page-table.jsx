import React from 'react';
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
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CachedIcon from '@mui/icons-material/Cached';
import CategoriesService from './services/categories-service';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CategoriesPanelPageTable = ({ categories, onDelete, onEdit }) => {
  const handleCategoryDelete = async (id) => {
    const deletedCategory = await CategoriesService.deleteCategory(id);

    if (typeof deletedCategory === 'string') {
      console.error(deletedCategory);
      return;
    }

    onDelete(id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
              <StyledTableCell component="th" scope="row">
                {burgerCat.id}
              </StyledTableCell>
              <StyledTableCell>{burgerCat.category}</StyledTableCell>
              <StyledTableCell align="right">{burgerCat.createdAt}</StyledTableCell>
              <StyledTableCell align="right">{burgerCat.updatedAt}</StyledTableCell>
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
    </TableContainer>
  );
};

export default CategoriesPanelPageTable;
