import { combineReducers } from 'redux';
import messageState, { MessageReducer } from './AddMessage';
import messagesState, { MessagesReducer } from './Messages';
export interface AppState {
  messageState: MessageReducer;
  messagesState: MessagesReducer;
}

const state = combineReducers({ messageState, messagesState });

export default state;
