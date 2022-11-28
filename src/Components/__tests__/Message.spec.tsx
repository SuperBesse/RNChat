import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Message from '../Message';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

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

const message = { content: 'test', date: 1487076708000 };

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
});
