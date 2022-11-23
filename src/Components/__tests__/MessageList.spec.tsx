import React from 'react';
import { render, screen } from '@testing-library/react-native';
import MessageList from '../MessageList';
import { store } from '@/Store';
import { receivedNewMessage } from '@/Redux/Actions/MessagesActions';
jest.mock('../../Translations');
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('MessageInput', () => {
  it('should render correctly', () => {
    const tree = render(<MessageList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should action send message on onEndEditing event', async () => {
    store.dispatch(receivedNewMessage({ message: 'test', date: Date.now() }));
    const tree = render(<MessageList />).toJSON();
    //const text = screen.getByText('test');
    //expect(text).not.toBeNull();
    expect(tree).toMatchSnapshot();
  });
});
