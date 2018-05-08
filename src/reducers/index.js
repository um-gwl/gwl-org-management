import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from '../routes/login/Login.reducer';

export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    loginUser : loginReducer,
    form:formReducer,
    ...asyncReducers,
  });

  return (state, action) => appReducer(state, action);
}
