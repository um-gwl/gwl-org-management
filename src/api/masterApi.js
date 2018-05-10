import axios from 'axios';

export const getMasterDetails = token =>
  axios.get(
    '/api/get/master-data',
      {headers: { 'goodwork-accessToken-remember': token }})
    .then(res => res.data);
