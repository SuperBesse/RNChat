import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { Message as IMEssage } from '@/Types/Message';

type Props = {
  message: IMEssage;
};

const Message = ({ message }: Props) => {
  const formattedDate = (timestamp: number): string => {
    const timestampToDate = new Date(timestamp);
    return timestampToDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.content}>{message.content}</Text>
      </View>
      <Text style={styles.date}>{formattedDate(message.date)}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  messageContainer: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    maxWidth: '60%',
    backgroundColor: '#4b9cba',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
  },
  date: {
    fontSize: 10,
  },
});
