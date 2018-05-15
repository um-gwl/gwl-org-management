import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from '../routes/login/Login.reducer';
import masterReducer from './MasterData.reducer';
import alertModalReducer from '../containers/alertModal/alertModal.reducer';


export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    loginUser : loginReducer,
    masterData : masterReducer,
    alertModal : alertModalReducer,
    form:formReducer,
    ...asyncReducers,
  });

  return (state, action) => appReducer(state, action);
}
