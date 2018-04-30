import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from '../routes/login/Login.reducer';

const rootReducers = combineReducers({
   loginUser : loginReducer,
   router: routerReducer
});

export default rootReducers;
