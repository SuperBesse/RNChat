import { put, takeEvery, call } from 'redux-saga/effects';
import type { ActionType } from '../types';
import {
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '@/Redux/Actions/MessageActions';

export default function* addPostSaga() {
  yield takeEvery(SEND_MESSAGE_START, addMessage);
}

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

function* addMessage(action: ActionType<string>) {
  console.log(action);
  yield call(delay, 2000);
  try {
    yield put({
      type: SEND_MESSAGE_SUCCESS,
      payload: { message: String, date: Date.now() },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: SEND_MESSAGE_FAILURE, payload: {} });
  }
}
