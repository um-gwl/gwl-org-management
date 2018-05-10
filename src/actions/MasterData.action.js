import {
  ACTION_GET_MASTER_DATA,
  ACTION_GET_MASTER_DATA_STORE
} from '../routes/dashboard/DashboardConstant';

export function getMasterData(token) {
  return {
    type: ACTION_GET_MASTER_DATA,
    payload: token,
  };
}

export function saveMasterData({payload}) {
  return {
    type: ACTION_GET_MASTER_DATA_STORE,
    payload: payload,
  };
}
