export const RECEIVED_NEW_MESSAGE = 'RECEIVED_NEW_MESSAGE';
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';
export const CLEAR_ALL_MESSAGES = 'CLEAR_ALL_MESSAGES';

import type { Message } from '@/Types/Message';

export function receivedNewMessage(message: Message) {
  return {
    type: RECEIVED_NEW_MESSAGE,
    payload: message,
  };
}
