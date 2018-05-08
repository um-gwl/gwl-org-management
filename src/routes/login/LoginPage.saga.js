import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as actions from '../../actions/Login.action';
import * as constants from './LoginPageConstants';
import * as api from '../../api/api';


function* googleloginUser({ payload }) {
  try {
    const response = yield api.googleLoginUser(payload);
    if(response.status){
      localStorage.setItem('goodwork-accessToken-remember', response.authToken);
      yield put({type: constants.ACTION_STORE_USER_PROFILE_INFO, payload: response});
      yield put(replace('/employee/dashboard'));
    }
    else{
      yield put({type: constants.ACTION_LOGIN_CLEAR});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constants.ACTION_LOGIN_CLEAR});
  }
}

function* userLogout({ payload }) {
  try {
    const response = yield api.logout(payload);
    localStorage.setItem('goodwork-accessToken-remember', '');
    yield put(replace('/login'));
    if(response.status){
      yield put({type: constants.ACTION_LOGIN_CLEAR});
    }
    else{
      yield put({type: constants.ACTION_LOGIN_CLEAR});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constants.ACTION_LOGIN_CLEAR});
  }
}


export default function* LoginSagas() {
  yield [
    fork(takeLatest, constants.ACTION_GOOGLE_LOGIN_REQUEST, googleloginUser),
    fork(takeLatest, constants.ACTION_LOGOUT, userLogout),
  ];
}
