import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as actions from './MasterData.action';
import * as constants from './dashboard/DashboardConstant';
import * as constantLogin from './login/LoginPageConstants';
import * as api from '../api/masterApi';


function* getMasterDetails({ payload }) {
  try {
    const response = yield api.getMasterDetails(payload);
    if(response.status){
      yield put({type: constants.ACTION_GET_MASTER_DATA_STORE, payload: response.data});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constantLogin.ACTION_LOGOUT});
  }
}

export default function* MasterDatasagas() {
  yield [
    fork(takeLatest, constants.ACTION_GET_MASTER_DATA, getMasterDetails),
  ];
}
