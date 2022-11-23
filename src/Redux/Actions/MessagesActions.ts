export const RECEIVED_NEW_MESSAGE = 'RECEIVED_NEW_MESSAGE';
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';

import type { Message } from '@/Types/Message';

export function receivedNewMessage(message: Message) {
  return {
    type: RECEIVED_NEW_MESSAGE,
    payload: message,
  };
}
