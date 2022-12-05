import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ChatContainer from '../ChatContainer';
import MessageInput from '@/Components/MessageInput';
import MessageList from '@/Components/MessageList';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('ChatContainer', () => {
  it('should render correctly', () => {
    const tree = render(<ChatContainer />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.UNSAFE_getAllByType(MessageInput).length).toBe(1);
    expect(screen.UNSAFE_getAllByType(MessageList).length).toBe(1);
  });
});
