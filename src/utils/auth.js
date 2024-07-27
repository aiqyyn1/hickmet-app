import api from '../api/axios';
import Cookies from 'js-cookie';

export const login = async (data) => {
  try {
    const response = await api.post('/login', data);
    const { access_token } = response.data;
    Cookies.set('access', access_token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const signUp = async (data) => {
  try {
    const response = await api.post(
      '/register',

      data
    );
    const { access_token } = response.data;
    Cookies.set('access', access_token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
