import { put, takeEvery, call } from 'redux-saga/effects';
import type { ActionType } from '@/Types/Actions';
import {
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '@/Redux/Actions/MessageActions';
import { receivedNewMessage } from '@/Redux/Actions/MessagesActions';
import { Message } from '@/Types/Message';

export default function* addMessageSaga() {
  console.log('addMessageSaga');
  yield takeEvery(SEND_MESSAGE_START, addMessage);
}

const randomTime = () => Math.floor(Math.random() * 4000);

const delay = () => new Promise(resolve => setTimeout(resolve, randomTime()));

const randomError = (): Boolean => Math.floor(Math.random() * 100) < 30;

function* addMessage(action: ActionType<string>) {
  console.log('addMessage');
  console.log(action);
  yield call(delay);
  try {
    const error: Boolean = yield call(randomError);
    if (error) {
      throw new Error('fake error');
    }
    console.log('SEND_MESSAGE_SUCCESS');
    const finalMessage = {
      ...action.payload,
      date: Date.now(),
    };
    yield put({
      type: SEND_MESSAGE_SUCCESS,
      payload: finalMessage,
    });
    yield put(receivedNewMessage(finalMessage));
  } catch (err) {
    yield put({ type: SEND_MESSAGE_FAILURE, payload: {} });
  }
}

export { addMessage };
