import React from 'react';
import { Text } from 'react-native';

type Props = {
  message: String;
};

const Message = ({ message }: Props) => {
  return <Text>{message}</Text>;
};

export default Message;
