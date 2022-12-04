import { call, put, takeEvery } from 'redux-saga/effects';
import type { ActionType } from '@/Types/Actions';
import {
  RECEIVED_NEW_MESSAGE,
  SAVE_NEW_MESSAGE,
} from '@/Redux/Actions/MessagesActions';
import { Message } from '@/Types/Message';
import { launchSuccessFeedback } from '@/Services/HapticFeedback';

export default function* receivedMessageSaga() {
  yield takeEvery(RECEIVED_NEW_MESSAGE, receivedNewMessage);
}

function* receivedNewMessage(action: ActionType<Message>) {
  yield call(launchSuccessFeedback);
  yield put({
    type: SAVE_NEW_MESSAGE,
    payload: action.payload,
  });
}

export { receivedNewMessage };
