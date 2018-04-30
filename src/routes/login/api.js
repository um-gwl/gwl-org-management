import axios from 'axios';

export const loginUser = payload =>
  axios.post('/api/v1/sessions', payload)
    .then(res => res.data);
