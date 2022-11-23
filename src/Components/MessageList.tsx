import React from 'react';
import { FlatList, ViewProps, StyleProp, ListRenderItem } from 'react-native';
import Message from './Message';
import { Message as IMessage } from '@/Types/Message';
import { useSelector } from 'react-redux';
import { AppState } from '@/Redux/Reducers';

type Props = {
  style?: StyleProp<ViewProps>;
};

const MessageList = ({ style }: Props) => {
  console.log('MessageList');

  const renderItem: ListRenderItem<IMessage> = ({ item }) => (
    <Message message={item.message} />
  );

  const messages = useSelector(
    (state: AppState) => state.messagesState.messages,
  );

  return (
    <FlatList
      contentContainerStyle={style}
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item: IMessage) => item.date.toString()}
    />
  );
};

export default MessageList;

MessageList.defaultProps = {
  style: undefined,
};
