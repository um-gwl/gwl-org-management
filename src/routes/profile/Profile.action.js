import {
  ACTION_SAVE_PROFILE_DETAILS
} from './Profile.constant';

export const sendProfileDetails = (formData) => {
  return {
    type: ACTION_SAVE_PROFILE_DETAILS,
    payload: formData,
  };
}
