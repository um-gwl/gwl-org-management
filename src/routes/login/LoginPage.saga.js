import { call, fork, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../../actions/Login.action';
import * as constants from './LoginPageConstants';
import * as api from '../../api/api';


function* googleloginUser({ payload }) {
  try {
    const response = yield api.googleLoginUser(payload);
    if(response.status){
      localStorage.setItem('goodwork-accessToken-remember', response.authToken);
      yield put({type: constants.ACTION_STORE_USER_PROFILE_INFO, payload: response});
    }
    else{
      yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
  }
}

function* checkLoginAuth({ payload }) {
  try {
    const response = yield api.checkAuth(payload);
    if(response.status){
      yield put({type: constants.ACTION_CHECK_AUTH_STORE, payload: response});
    }
    else{
      yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
  }
}

function* userLogout({ payload }) {
  try {
    const response = yield api.logout(payload);
    if(response.status){
      localStorage.setItem('goodwork-accessToken-remember', '');
      yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
    }
    else{
      yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constants.ACTION_LOGIN_REQUEST_FAILED});
  }
}


export default function* LoginSagas() {
  yield [
    fork(takeLatest, constants.ACTION_GOOGLE_LOGIN_REQUEST, googleloginUser),
    fork(takeLatest, constants.ACTION_CHECK_AUTH, checkLoginAuth),
    fork(takeLatest, constants.ACTION_LOGOUT, userLogout),
  ];
}
