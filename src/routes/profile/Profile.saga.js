import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import * as constantLogin from '../login/LoginPageConstants';
import * as constants from './Profile.constant';
import * as api from '../../api/api';
import * as constantsDashboard from '../dashboard/DashboardConstant';
import {ACTION_SHOW_ALERT_MODAL} from '../../containers/alertModal/alertModal.constant';


function* saveProfileDetails({ payload }) {
  try {
    const response = yield api.sendProfileDetails(payload);
    if(response.status){
      const token = localStorage.getItem('goodwork-accessToken-remember');
      yield put({type: ACTION_SHOW_ALERT_MODAL, payload: 'Profile Saved successfully'});
      yield put({type: constantsDashboard.ACTION_GET_USER_DETAILS, payload: token});
    }
    // localStorage.setItem('coworks-accessToken-remember', response.data.token);
  } catch (e) {
    yield put({type: constantLogin.ACTION_LOGOUT});
  }
}

export default function* ProfileSagas() {
  yield [
    fork(takeLatest, constants.ACTION_SAVE_PROFILE_DETAILS, saveProfileDetails),
  ];
}
