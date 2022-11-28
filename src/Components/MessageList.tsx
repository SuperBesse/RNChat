import React from 'react';
import {
  FlatList,
  ViewStyle,
  ListRenderItem,
  View,
  StyleSheet,
} from 'react-native';
import Message from './Message';
import { Message as IMessage } from '@/Types/Message';
import { useSelector } from 'react-redux';
import { AppState } from '@/Redux/Reducers';
import ScrollbarIndicator from '@/Components/ScrollbarIndicator';

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
    <View style={styles.container}>
      <FlatList
        style={style}
        contentContainerStyle={{ flexGrow: 1 }}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item: IMessage) => item.date.toString()}
        persistentScrollbar
        inverted
        onLayout={event => {
          const { x, y, width, height } = event.nativeEvent.layout;
          console.log(event.nativeEvent.layout);
        }}
        onContentSizeChange={(_, height) => {
          console.log('onContentSizeChange ', height);
        }}
        onScroll={(e: any) => {
          console.log('onScroll', e.nativeEvent.contentOffset);
        }}
      />
      <ScrollbarIndicator
        scrollbarBackgroundColor="red"
        width={10}
        scrollIndicatorColor="green"
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

MessageList.defaultProps = {
  style: undefined,
};
