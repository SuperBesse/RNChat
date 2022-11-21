import bootstrap from './bootstrap'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([bootstrap()])
}
