import {
  ACTION_SAVE_PROFILE_DETAILS
} from '../routes/profile/Profile.constant';

export const sendProfileDetails = (formData) => {
  return {
    type: ACTION_SAVE_PROFILE_DETAILS,
    payload: formData,
  };
}
