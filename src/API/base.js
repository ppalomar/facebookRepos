import axios from 'axios';

import { API_BASE_URL } from 'config';

const baseInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default baseInstance;
