import {
  SAVE_NEW_MESSAGE,
  CLEAR_ALL_MESSAGES,
} from '@/Redux/Actions/MessagesActions';
import type { ActionType } from '@/Types/Actions';
import type { Message } from '@/Types/Message';
import {
  ADD_MESSAGE_FAILURE,
  RESEND_MESSAGE_SUCCESS,
} from '../Actions/MessageActions';

export type MessagesReducer = {
  messages: Array<Message>;
};

const initialState: MessagesReducer = {
  messages: [],
};

export default function (state = initialState, action: ActionType<Message>) {
  switch (action.type) {
    case SAVE_NEW_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    case ADD_MESSAGE_FAILURE: {
      const msg = { ...action.payload, notSent: true };
      return {
        ...state,
        messages: [msg, ...state.messages],
      };
    }
    case RESEND_MESSAGE_SUCCESS: {
      const msg = action.payload;
      const updatedMsgs = state.messages.map((m: Message) => {
        if (m.notSent && m.date === msg.date) {
          m.notSent = false;
        }
        return m;
      });
      return {
        ...state,
        messages: [...updatedMsgs],
      };
    }
    case CLEAR_ALL_MESSAGES:
      return initialState;
    default: {
      return { ...state };
    }
  }
}
