import {
  ACTION_GET_USER_DETAILS
} from './DashboardConstant';

export function getUserDetails(token) {
  return {
    type: ACTION_GET_USER_DETAILS,
    payload: token,
  };
}
