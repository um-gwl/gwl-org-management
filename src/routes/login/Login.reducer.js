import { ACTION_STORE_USER_PROFILE_INFO } from './LoginPageConstants';

export default (state = {},action) => {
  switch(action.type){
    case ACTION_STORE_USER_PROFILE_INFO:
      console.log(action.payload);
      return action.payload;
    default:
    return state;
  }
}
