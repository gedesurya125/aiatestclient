import axios from 'axios';

export const baseURL = "http://localhost:5000";

export const baseAPI = axios.create({
  baseURL
})

