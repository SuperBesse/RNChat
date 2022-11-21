import { combineReducers } from 'redux';
import messageState, { MessageReducer } from './AddMessage';

export interface AppState {
  messageState: MessageReducer;
}

const state = combineReducers({ messageState });

export default state;
