import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import Message from '../Message';
import type { Message as IMEssage } from '@/Types/Message';
import * as redux from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

beforeEach(() => {
  jest.spyOn(Date.prototype, 'getDay').mockReturnValue(2);
  jest
    .spyOn(Date.prototype, 'toISOString')
    .mockReturnValue('2022-01-01T00:00:00.000Z');
  jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
});

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(() => useDispatchSpy.mockClear());

const message = { content: 'test', date: 1487076708000 } as IMEssage;

describe('Message', () => {
  it('should render correctly', () => {
    const tree = render(<Message message={message} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a text in the message component', async () => {
    render(<Message message={message} />).toJSON();
    const text = screen.getByText('test');
    expect(text).not.toBeNull();
  });

  it('should render a text in failure state', async () => {
    const errorMessage = {
      content: 'error',
      date: 1487076708000,
      notSent: true,
    } as IMEssage;
    const tree = render(<Message message={errorMessage} />).toJSON();
    expect(tree).toMatchSnapshot();
    const text = screen.findAllByText('circle-exclamation');
    expect(text).not.toBeNull();
  });

  it('should resend action when message is in fail state', async () => {
    const errorMessage = {
      content: 'error',
      date: 1487076708000,
      notSent: true,
    } as IMEssage;
    render(<Message message={errorMessage} />).toJSON();

    const resendMessagePayload = {
      payload: {
        content: 'error',
        date: 1487076708000,
        notSent: true,
      },
      type: 'RESEND_MESSAGE_START',
    };
    const retryButton = await screen.findByTestId(`testid-${message.date}`);
    act(() => {
      fireEvent.press(retryButton);
    });
    expect(mockDispatch).toHaveBeenCalledWith(resendMessagePayload);
    useDispatchSpy.mockClear();
  });
});
