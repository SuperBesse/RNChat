import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Message from '../Message';
import { store } from '@/Store';
import { receivedNewMessage } from '@/Redux/Actions/MessagesActions';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const message = { content: 'test', date: Date.now() };

describe('MessageInput', () => {
  it('should render correctly', () => {
    const tree = render(<Message message={message} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display a text from the message content', async () => {
    render(<Message message={message} />).toJSON();
    const text = screen.getByText('test');
    expect(text).not.toBeNull();
  });
});
