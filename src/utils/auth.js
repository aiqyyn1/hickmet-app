import api from '@/api/axios';
import Cookies from 'js-cookie';

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    const { token } = response.data;
    Cookies.set('token', token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const signUp = async (name, lastName, email, password, role) => {
  try {
    const response = await api.post('/signup', { name, lastName, email, password, role });
    const { token } = response.data;
    Cookies.set('token', token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
