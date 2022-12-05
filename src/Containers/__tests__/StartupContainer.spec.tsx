import React from 'react';
import { render, screen } from '@testing-library/react-native';
import StartupContainer from '../StartupContainer';
import { ActivityIndicator, Text } from 'react-native';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('StartupContainer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    const tree = render(<StartupContainer />).toJSON();
    expect(tree).toMatchSnapshot();
    jest.runAllTimers();
    jest.runAllTicks();
    expect(screen.UNSAFE_getAllByType(ActivityIndicator).length).toBe(1);
    expect(screen.UNSAFE_getAllByType(Text).length).toBe(1);
  });
});
