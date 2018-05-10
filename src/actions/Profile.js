import axios from 'axios';

export const sendProfileDetails = (formData) => {
  axios.post('/api/user/profile',
    formData,
    {
      headers: 
      { 'goodwork-accessToken-remember': localStorage.getItem('goodwork-accessToken-remember'),
      'content-type': 'multipart/form-data'
      }
    }
  ).then(res => res.data);
}
