import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://heroku.com/apps/personaldevelopment-api' : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
})

export default api;