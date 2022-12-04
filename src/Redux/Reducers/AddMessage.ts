import {
  SEND_MESSAGE_START,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
} from '@/Redux/Actions/MessageActions';
import type { ActionType } from '@/Types/Actions';
import type { Message } from '@/Types/Message';
import { CLEAR_ALL_MESSAGES } from '../Actions/MessagesActions';

export type MessageReducer = {
  message?: Message;
  isSending: boolean;
};

const initialState: MessageReducer = {
  message: undefined,
  isSending: false,
};

export default function (state = initialState, action: ActionType<Message>) {
  switch (action.type) {
    case SEND_MESSAGE_START: {
      return {
        ...state,
        message: { ...action.payload },
        isSending: true,
      };
    }
    case ADD_MESSAGE_SUCCESS: {
      return {
        ...state,
        message: undefined,
        isSending: false,
      };
    }
    case ADD_MESSAGE_FAILURE: {
      return {
        ...state,
        message: undefined,
        isSending: false,
      };
    }
    case CLEAR_ALL_MESSAGES:
      return initialState;
    default: {
      return { ...state };
    }
  }
}
