import React from 'react';
import { render, screen } from '@testing-library/react-native';
import MessageList from '../MessageList';
import { FlatList } from 'react-native';
import Message from '../Message';
import type { Message as IMEssage } from '@/Types/Message';
import * as Redux from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('MessageList', () => {
  it('should render correctly', () => {
    const tree = render(<MessageList />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.UNSAFE_getAllByType(FlatList).length).toBe(1);
  });

  it('should render message when data is updated', () => {
    render(<MessageList />).toJSON();

    const message = {
      content: 'message 1',
      date: 1487076708000,
      notSent: true,
    } as IMEssage;
    jest.spyOn(Redux, 'useSelector').mockReturnValue([message]);
    screen.rerender(<MessageList />);
    expect(screen.UNSAFE_getAllByType(Message).length).toBe(1);
  });
});
