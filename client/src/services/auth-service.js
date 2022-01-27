import axios from 'axios';
import SessionService from './session-service';
import reduxStore from '../store/index';
import { login, logout, authFailed } from '../store/auth';

// Singleton pattern - only one object of a class
const AuthService = new (class AuthService {
  constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      headers: { 'Content-Type': 'application/json' },
    });

    if (token) {
      this.authenticate(token);
    } else {
      reduxStore.dispatch(authFailed());
    }
  }

  setAuth(token) {
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async login({ email, password }) {
    try {
      const response = await this.requester.post('/login', { email, password });
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  logout() {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(logout());
  }

  async register(formData) {
    try {
      const response = await this.requester.post('/register', formData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async authenticate(token) {
    try {
      const { data: user } = await this.requester.post('/', { token });
      reduxStore.dispatch(login({ user }));
      this.setAuth(token);
    } catch (error) {
      reduxStore.dispatch(authFailed());
      console.error('Token is not valid');
    }
  }

  async checkEmail(email) {
    try {
      const { data } = await this.requester.get(`/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      return error.message;
    }
  }
})();

export default AuthService;
