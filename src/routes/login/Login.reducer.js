import { fromJS } from 'immutable';
import { createReducerFromObject } from '../../utils/reducerUtils';
import { ACTION_STORE_USER_PROFILE_INFO,ACTION_LOGIN_CLEAR } from './LoginPageConstants';
const initialState = fromJS({
    isLoggedIn : false,
    userInfo : null
});

const reducerFunctions = {
  [ACTION_STORE_USER_PROFILE_INFO]: (state, payload) => state.merge({
    userInfo: fromJS(payload.data),
    isLoggedIn: true,
  }),
  [ACTION_LOGIN_CLEAR]: (state, payload) => state.merge({
    userInfo: null,
    isLoggedIn: false,
  })
};

const loginReducer = createReducerFromObject(reducerFunctions, initialState);
export default loginReducer;
