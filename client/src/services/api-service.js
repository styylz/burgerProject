import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getBurgers = async () => {
  try {
    const response = await instance.get('/burgers');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCategories = async () => {
  try {
    const response = await instance.get('/categories');
    return response.data;
  } catch (error) {
    return error;
  }
};

const getIngredients = async () => {
  try {
    const response = await instance.get('/ingredients');
    return response.data;
  } catch (error) {
    return error;
  }
};

const createBurger = async () => {
  try {
    const response = await instance.post('/burgers');

    return response.data;
  } catch (error) {
    return error;
  }
};

const Api = {
  getBurgers,
  getCategories,
  getIngredients,
  createBurger,
};

export default Api;
