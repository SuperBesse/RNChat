import { put, takeEvery } from 'redux-saga/effects';
import type { ActionType } from '@/Types/Actions';
import {
  RECEIVED_NEW_MESSAGE,
  SAVE_NEW_MESSAGE,
} from '@/Redux/Actions/MessagesActions';
import { Message } from '@/Types/Message';

export default function* receivedMessageSaga() {
  console.log('receivedMessageSaga');
  yield takeEvery(RECEIVED_NEW_MESSAGE, receivedNewMessage);
}

function* receivedNewMessage(action: ActionType<Message>) {
  console.log('receivedNewMessage');
  yield put({
    type: SAVE_NEW_MESSAGE,
    payload: action.payload,
  });
}

export { receivedNewMessage };
