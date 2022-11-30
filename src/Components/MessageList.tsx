import React from 'react';
import { FlatList, ViewStyle, ListRenderItem } from 'react-native';
import Message from './Message';
import { Message as IMessage } from '@/Types/Message';
import { useSelector } from 'react-redux';
import { AppState } from '@/Redux/Reducers';
import { LoremIpsum } from 'lorem-ipsum';

type Props = {
  style?: ViewStyle;
};

const MessageList = ({ style }: Props) => {
  const generateFakeMessages = (count: number) => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
    let dateKey = 1487076708000;
    return Array(count).fill({
      message: lorem.generateSentences(5),
      date: dateKey + 5000,
    });
  };
  const renderItem: ListRenderItem<IMessage> = ({ item }) => (
    <Message message={item} />
  );

  const messages = generateFakeMessages(15); //useSelector(
  //   (state: AppState) => state.messagesState.messages,
  // );

  return (
    <FlatList
      style={{ flex: 1 }}
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

MessageList.defaultProps = {
  style: undefined,
};
