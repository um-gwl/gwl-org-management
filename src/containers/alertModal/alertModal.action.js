import {
  ACTION_SHOW_ALERT_MODAL,
  ACTION_CLOSE_ALERT_MODAL
} from './alertModal.constant';

export function showAlertModal(msg) {
  return {
    type: ACTION_SHOW_ALERT_MODAL,
    payload: msg,
  };
}

export function closeAlertModal() {
  return {
    type: ACTION_CLOSE_ALERT_MODAL
  };
}
