import axios from 'axios';
// import AuthService from 'services/auth-service';

const CategoriesService = new (class CategoriesService {
  // validateToken() {
  //   const token = AuthService.getToken();
  //   if (!token) {
  //     throw new Error('Can not get user images without authentication');
  //   }

  //   return token;
  // }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/categories',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createCategory(formData) {
    // const token = CityService.validateToken();
    // if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.post('/', formData);

      return data;
    } catch (error) {
      if (error) return error.message;
      return error;
    }
  }

  async updateCategory(id, formData) {
    // const token = CityService.validateToken();
    // if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.patch(`/${id}`, formData);

      return data;
    } catch (error) {
      if (error) return error.message;
      return error;
    }
  }

  async deleteCategory(id) {
    // const token = CityService.validateToken();
    // if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete(`/${id}`);
      return data;
    } catch (error) {
      if (error) return error.message;
      return error;
    }
  }
})();

export default CategoriesService;
