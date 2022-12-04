import { Message } from '@/Types/Message';

export const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';
export const RESEND_MESSAGE_START = 'RESEND_MESSAGE_START';
export const RESEND_MESSAGE_SUCCESS = 'RESEND_MESSAGE_SUCCESS';

export function resendMessage(message: Message) {
  return {
    type: RESEND_MESSAGE_START,
    payload: message,
  };
}

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
