import {
  ACTION_LOGIN_REQUEST,
  ACTION_STORE_USER_PROFILE_INFO,
} from './LoginPageConstants';

export function logIn(userInfo) {
  console.log(userInfo);
  return {
    type: ACTION_LOGIN_REQUEST,
    payload: {userInfo},
  };
}

export function storeUserProfileInfo(response) {
  return {
    type: ACTION_STORE_USER_PROFILE_INFO,
    payload: { response },
  };
}
