import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from '../routes/login/Login.reducer';
import masterReducer from './MasterData.reducer';

export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    loginUser : loginReducer,
    masterData : masterReducer,
    form:formReducer,
    ...asyncReducers,
  });

  return (state, action) => appReducer(state, action);
}
