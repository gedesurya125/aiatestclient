import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://aiatestserver.herokuapp.com";
// console.log('ENVIRONTMENT NYA BROH', process.env.NODE_ENV);

export const baseAPI = axios.create({
  baseURL
})

