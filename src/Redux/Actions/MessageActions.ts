import { Message } from '@/Types/Message';

export const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export function sendMessage(message: String) {
  return {
    type: SEND_MESSAGE_START,
    payload: message,
  };
}

export function addMessageFail(message: Message) {
  return {
    type: ADD_MESSAGE_FAILURE,
    payload: message,
  };
}

export function addMessageSuccess(message: Message) {
  return {
    type: ADD_MESSAGE_SUCCESS,
    payload: message,
  };
}
