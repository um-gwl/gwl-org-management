import { fromJS } from 'immutable';
import { createReducerFromObject } from '../../utils/reducerUtils';
import { ACTION_SHOW_ALERT_MODAL,ACTION_CLOSE_ALERT_MODAL } from './alertModal.constant';
const initialState = fromJS({
    show : false,
    msg : null
});

const reducerFunctions = {
  [ACTION_SHOW_ALERT_MODAL]: (state, payload) => state.merge({
    msg: payload,
    show: true,
  }),
  [ACTION_CLOSE_ALERT_MODAL]: (state, payload) => state.merge({
    msg: null,
    show: false,
  })
};

const alertModalReducer = createReducerFromObject(reducerFunctions, initialState);
export default alertModalReducer;
