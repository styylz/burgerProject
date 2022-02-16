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
    return response;
  } catch (error) {
    return error;
  }
};

const Api = {
  getBurgers,
};

export default Api;
