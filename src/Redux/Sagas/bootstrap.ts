import { call, fork, put, take, all } from 'redux-saga/effects'
import {
  INIT_APP_FAILURE,
  INIT_APP_START,
  INIT_APP_SUCCESS,
} from '../Actions/AppActions'

function* bootstrap() {
    yield call(startApp)
}

function* startApp() {
  yield all([])
}

export default function* () {
  yield take(INIT_APP_START)
  yield fork(bootstrap)
}
