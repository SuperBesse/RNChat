export const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export function sendMessage(message: String) {
  return {
    type: SEND_MESSAGE_START,
    payload: { message },
  };
}
