import axios from 'axios';
import { API_URL2 } from '../actions/types';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create({
  baseURL: API_URL2,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
