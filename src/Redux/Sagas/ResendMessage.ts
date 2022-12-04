import { call, put, takeEvery } from 'redux-saga/effects';
import type { ActionType } from '@/Types/Actions';
import {
  RESEND_MESSAGE_START,
  RESEND_MESSAGE_SUCCESS,
} from '@/Redux/Actions/MessageActions';
import { Message } from '@/Types/Message';
import { launchSuccessFeedback } from '@/Services/HapticFeedback';

export default function* resendMessageSaga() {
  yield takeEvery(RESEND_MESSAGE_START, resendErrorMessage);
}

function* resendErrorMessage(action: ActionType<Message>) {
  yield call(launchSuccessFeedback);
  yield put({
    type: RESEND_MESSAGE_SUCCESS,
    payload: action.payload,
  });
}

export { resendMessageSaga };
