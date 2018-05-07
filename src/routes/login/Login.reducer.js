import { ACTION_STORE_USER_PROFILE_INFO,ACTION_LOGIN_REQUEST_FAILED,ACTION_CHECK_AUTH_STORE } from './LoginPageConstants';

const initialState = {
    isLoggedIn : false,
    userInfo : {}
};


export default (state = initialState,action) => {
  switch(action.type){
    case ACTION_STORE_USER_PROFILE_INFO:
      return {isLoggedIn:action.payload.status,userInfo:action.payload};
    case ACTION_CHECK_AUTH_STORE:
      return {isLoggedIn:action.payload.status,userInfo:action.payload};
    case ACTION_LOGIN_REQUEST_FAILED:
      return {
          isLoggedIn : false,
          userInfo : {}
      };
    default:
    return state;
  }
}
