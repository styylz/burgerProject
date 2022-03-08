import axios from 'axios';
import { appendUrlParams } from '../components/helpers/url-helpers';
import AuthService from './auth-service';

const BurgerService = new (class BurgerService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }
    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async uploadBurger(values) {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    formData.append('category', values.category);
    formData.append('cookingTime', values.cookingTime);
    formData.append('steps', values.steps);
    formData.append('image', values.image);

    const response = await this.requester.post('/burgers', formData, {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  }

  async getBurgers(params) {
    const requestUrl = 'http://localhost:5000/api/burgers?';
    const generatedParams = appendUrlParams(requestUrl, params);
    const { data } = await this.requester.get(generatedParams);
    return data;
  }

  async getBurger(id) {
    const { data } = await this.requester.get(`/burgers/${id}`);
    return data;
  }
})();

export default BurgerService;
