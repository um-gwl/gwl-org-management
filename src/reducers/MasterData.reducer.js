import { fromJS } from 'immutable';
import { createReducerFromObject } from '../utils/reducerUtils';
import { ACTION_STORE_USER_PROFILE_INFO,ACTION_LOGIN_CLEAR,ACTION_GET_MASTER_DATA,ACTION_GET_MASTER_DATA_STORE } from '../routes/dashboard/DashboardConstant';
const initialState = fromJS({
    locations : null,
    designations : null,
    departments : null
});

const reducerFunctions = {
  [ACTION_GET_MASTER_DATA_STORE]: (state, payload) => state.merge({
    locations: fromJS(payload.locations),
    designations: fromJS(payload.designations),
    departments: fromJS(payload.departments),
  })
};

const loginReducer = createReducerFromObject(reducerFunctions, initialState);
export default loginReducer;
