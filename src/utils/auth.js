import api from '../api/axios';
import Cookies from 'js-cookie';

export const login = async (data) => {
  try {
    const response = await api.post('/login', data);
    const { accessToken } = response.data;
    Cookies.set('access', accessToken);
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
   
    
    Cookies.set('access', accessToken);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
