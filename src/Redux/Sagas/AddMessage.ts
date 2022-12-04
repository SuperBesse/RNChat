import { put, takeEvery, call } from 'redux-saga/effects';
import type { ActionType } from '@/Types/Actions';
import {
  SEND_MESSAGE_START,
  addMessageFail,
  addMessageSuccess,
} from '@/Redux/Actions/MessageActions';
import {
  CLEAR_ALL_MESSAGES,
  receivedNewMessage,
} from '@/Redux/Actions/MessagesActions';
import { Message } from '@/Types/Message';
import { MessageGenerator } from '@/utils/MessageGenerator';
import { paragraph } from '@/utils/LoremIpsum';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const CMD = 'cmd:';

export default function* addMessageSaga() {
  yield takeEvery(SEND_MESSAGE_START, addMessage);
}

const randomSentencesCount = () => Math.floor(Math.random() * 9 + 2);

const randomTime = () => Math.floor(Math.random() * 400);

const delay = () => new Promise(resolve => setTimeout(resolve, randomTime()));

const randomError = (): Boolean => false; // Math.floor(Math.random() * 100) < 30;

function* addMessage(action: ActionType<string>) {
  yield call(delay);
  try {
    //TODO: create new saga to manage command action
    if (action.payload.startsWith(CMD)) {
      const command = action.payload.replace(CMD, '') as MessageGenerator;
      switch (command) {
        case MessageGenerator.ClearAll:
          yield put({
            type: CLEAR_ALL_MESSAGES,
            payload: {},
          });
          break;
        case MessageGenerator.LoremIpsum:
          const generatedMessage = {
            content: paragraph(randomSentencesCount()),
            date: Date.now(),
          } as Message;
          yield put(addMessageSuccess(generatedMessage));
          yield put(receivedNewMessage(generatedMessage));
          break;
        default:
          break;
      }
    } else {
      const error: Boolean = yield call(randomError);
      if (error) {
        throw new Error('fake error');
      }
      const finalMessage = {
        content: action.payload,
        date: Date.now(),
      } as Message;
      yield put(addMessageSuccess(finalMessage));
      yield put(receivedNewMessage(finalMessage));
    }
  } catch (err) {
    yield call(ReactNativeHapticFeedback.trigger, 'notificationError');
    yield put(addMessageFail());
  }
}

export { addMessage };
