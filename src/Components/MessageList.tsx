import React from 'react';
import { FlatList, ViewStyle, ListRenderItem, StyleSheet } from 'react-native';
import Message from './Message';
import { Message as IMessage } from '@/Types/Message';
import { useSelector } from 'react-redux';
import { AppState } from '@/Redux/Reducers';
import { paragraph } from '@/utils/LoremIpsum';

type Props = {
  style?: ViewStyle;
};

const MessageList = ({ style }: Props) => {
  const generateFakeMessages = (count: number) => {
    let dateKey = 1487076708000;
    return Array(count).fill({
      message: paragraph(5),
      date: dateKey + 5000,
    });
  };

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
