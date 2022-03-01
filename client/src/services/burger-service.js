import axios from 'axios';
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
    console.log(values);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    formData.append('categories', values.categories);
    formData.append('cookingTime', values.cookingTime);
    formData.append('steps', values.steps);
    formData.append('image', values.image);

    const response = await this.requester.post('/burgers', formData, {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);

    return response;
  }
})();

export default BurgerService;
