import {
  SAVE_NEW_MESSAGE,
  CLEAR_ALL_MESSAGES,
} from '@/Redux/Actions/MessagesActions';
import type { ActionType } from '@/Types/Actions';
import type { Message } from '@/Types/Message';

export type MessagesReducer = {
  messages: Array<Message>;
};

const initialState: MessagesReducer = {
  messages: [],
};

export default function (state = initialState, action: ActionType<Message>) {
  switch (action.type) {
    case SAVE_NEW_MESSAGE: {
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    }
    case CLEAR_ALL_MESSAGES: {
      return initialState;
    }
    default: {
      return { ...state };
    }
  }
}
