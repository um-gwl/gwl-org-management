import { call, fork, put, takeLatest } from 'redux-saga/effects';

import * as actions from './Login.action';
import * as constants from './LoginPageConstants';
import * as api from './api';


function* loginUser({ payload }) {
  try {
    yield put({type: constants.ACTION_STORE_USER_PROFILE_INFO, payload: false});

    // const response = yield api.loginUser(payload);
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    console.log(e);
  }
}


export default function* LoginSagas() {
  yield [
    fork(takeLatest, constants.ACTION_LOGIN_REQUEST, loginUser),
  ];
}
