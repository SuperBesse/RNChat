import { put, takeEvery, call } from 'redux-saga/effects';
import type { ActionType } from '../types';
import {
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '@/Redux/Actions/MessageActions';

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
    yield put({
      type: SEND_MESSAGE_SUCCESS,
      payload: { message: String, date: Date.now() },
    });
  } catch (err) {
    console.log(err);
    console.log('SEND_MESSAGE_FAILURE');
    yield put({ type: SEND_MESSAGE_FAILURE, payload: {} });
  }
}

export { addMessage };
