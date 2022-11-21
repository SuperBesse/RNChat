import {
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '@/Redux/Actions/MessageActions';
import type { ActionType } from '../types';

type Message = {
  message: string;
  date: Date;
};
export type MessageReducer = {
  message?: Message;
  isLoading: boolean;
};

const initialState: MessageReducer = {
  message: undefined,
  isLoading: false,
};

export default function (state = initialState, action: ActionType<Message>) {
  switch (action.type) {
    case SEND_MESSAGE_START: {
      return {
        ...state,
        message: { ...action.payload },
        isLoading: true,
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        message: undefined,
        isLoading: false,
      };
    }
    case SEND_MESSAGE_FAILURE: {
      return {
        message: undefined,
        isLoading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}
