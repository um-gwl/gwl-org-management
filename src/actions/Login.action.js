import {
  ACTION_GOOGLE_LOGIN_REQUEST,
  ACTION_STORE_USER_PROFILE_INFO,
  ACTION_LOGIN_REQUEST_FAILED,
  ACTION_CHECK_AUTH,
  ACTION_LOGOUT
} from '../routes/login/LoginPageConstants';

export function googlelogInApi(userInfo) {
  return {
    type: ACTION_GOOGLE_LOGIN_REQUEST,
    payload: {userInfo},
  };
}

export function checkAuth(authToken) {
  return {
    type: ACTION_CHECK_AUTH,
    payload: authToken,
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

export function loginFailed() {
  return {
    type: ACTION_LOGIN_REQUEST_FAILED
  };
}
