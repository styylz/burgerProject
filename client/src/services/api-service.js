import axios from 'axios';
import { appendUrlParams } from '../components/helpers/url-helpers';

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

const getCategories = async (params) => {
  const requestUrl = 'http://localhost:5000/api/categories?';
  const generatedParams = appendUrlParams(requestUrl, params);
  try {
    const response = await instance.get(generatedParams);
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

const getCategoriesTest = async () => {
  try {
    const response = await instance.get('/categories');
    console.log(response.data);
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
  getCategoriesTest,
};

export default Api;
