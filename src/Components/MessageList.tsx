import React from 'react';
import { FlatList, ViewStyle, ListRenderItem, StyleSheet } from 'react-native';
import Message from './Message';
import { Message as IMessage } from '@/Types/Message';
import { useSelector } from 'react-redux';
import { AppState } from '@/Redux/Reducers';

type Props = {
  style?: ViewStyle;
};

const MessageList = ({ style }: Props) => {
  const renderItem: ListRenderItem<IMessage> = ({ item }) => (
    <Message message={item} />
  );

  const messages = useSelector(
    (state: AppState) => state.messagesState.messages,
  );

  return (
    <FlatList
      style={[style, styles.list]}
      contentContainerStyle={style}
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item: IMessage) => item.date.toString()}
      persistentScrollbar
      inverted
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
MessageList.defaultProps = {
  style: undefined,
};
