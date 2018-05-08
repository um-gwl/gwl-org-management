import {
  ACTION_GOOGLE_LOGIN_REQUEST,
  ACTION_STORE_USER_PROFILE_INFO,
  ACTION_LOGIN_CLEAR,
  ACTION_LOGOUT
} from '../routes/login/LoginPageConstants';

export function googlelogInApi(userInfo) {
  return {
    type: ACTION_GOOGLE_LOGIN_REQUEST,
    payload: {userInfo},
  };
}

export function logout(authToken){
  return {
    type: ACTION_LOGOUT,
    payload: authToken,
  };
}

export function storeUserProfileInfo(response) {
  return {
    type: ACTION_STORE_USER_PROFILE_INFO,
    payload: { response },
  };
}

export function userClear() {
  return {
    type: ACTION_LOGIN_CLEAR
  };
}
