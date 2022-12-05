import React from 'react';
import { act, render, screen } from '@testing-library/react-native';
import MessageInput from '../MessageInput';
import * as redux from 'react-redux';
import { TextInput } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import addMessageSaga, { addMessage } from '@/Redux/Sagas/AddMessage';
import * as Redux from 'react-redux';

//import { expectSaga } from 'redux-saga-test-plan';
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../Translations');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
afterAll(() => useDispatchSpy.mockClear());

describe('MessageInput', () => {
  let generator = null;
  beforeAll(() => {
    generator = addMessageSaga();
  });
  it('should render correctly', () => {
    const tree = render(<MessageInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should action send message on onEndEditing event', async () => {
    render(<MessageInput />).toJSON();

    const addMessagePayload = {
      payload: '',
      type: 'SEND_MESSAGE_START',
    };
    act(() => {
      screen.UNSAFE_getByType(TextInput).props.onEndEditing();
    });
    expect(mockDispatch).toHaveBeenCalledWith(addMessagePayload);
  });

  it('should update state text when textInput update text value', async () => {
    render(<MessageInput />).toJSON();
    expect(screen.UNSAFE_getByType(TextInput).props.value).toEqual('');
    act(() => {
      screen.UNSAFE_getByType(TextInput).props.onChangeText('test');
    });
    expect(screen.UNSAFE_getByType(TextInput).props.value).toEqual('test');
  });

  it('should trigger message saga when message action is send', async () => {
    put({ type: 'SEND_MESSAGE_START' });
    const actual = generator.next();
    expect(actual.value).toEqual(takeEvery('SEND_MESSAGE_START', addMessage));

    // return expectSaga(addMessageSaga)
    //   .put({
    //     type: 'SEND_MESSAGE_SUCCESS',
    //     message: 'message test',
    //   })
    //   .dispatch({
    //     type: 'SEND_MESSAGE_SUCCESS',
    //     payload: { message: 'message test' },
    //   })
    //   .run();
  });

  it('should render a loader when message is sending', () => {
    render(<MessageInput />).toJSON();
    jest.spyOn(Redux, 'useSelector').mockReturnValue(true);
    screen.rerender(<MessageInput />);
    expect(screen.getAllByTestId('activity-sending')).not.toBeNull();
  });
});
