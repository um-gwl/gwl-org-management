import axios from 'axios';

export const googleLoginUser = payload =>
  axios.post('/api/google/login', payload)
    .then(res => res.data);

export const manualLoginUser = payload =>
  axios.post('/api/user/login', payload)
    .then(res => res.data);

export const checkAuth = token =>
  axios.get(
    '/api/check/user',
      {headers: { 'goodwork-accessToken-remember': token }})
    .then(res => res.data);

export const getUserDetails = token =>
  axios.get(
    '/api/user/details',
      {headers: { 'goodwork-accessToken-remember': token }})
    .then(res => res.data);

export const logout = token =>
  axios.get(
    '/api/logout',
      {headers: { 'goodwork-accessToken-remember': token }})
    .then(res => res.data);
