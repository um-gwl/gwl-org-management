import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as constants from './dashboard/DashboardConstant';
import * as constantLogin from './login/LoginPageConstants';
import * as api from '../api/api';


function* getUserDetails({ payload }) {
  try {
    const response = yield api.getUserDetails(payload);
    if(response.status){
      yield put({type: constantLogin.ACTION_STORE_USER_PROFILE_INFO, payload: response});
    }
    else{
      yield put({type: constantLogin.ACTION_LOGOUT});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constantLogin.ACTION_LOGOUT});
  }
}

export default function* Usersagas() {
  yield [
    fork(takeLatest, constants.ACTION_GET_USER_DETAILS, getUserDetails),
  ];
}
