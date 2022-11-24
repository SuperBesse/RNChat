import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { Message as IMEssage } from '@/Types/Message';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation';

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
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{formattedDate(message.date)}</Text>
        {message.notSent && (
          <FontAwesomeIcon
            style={styles.errorIcon}
            icon={faCircleExclamation}
          />
        )}
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.content}>{message.content}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  dateContainer: {
    marginRight: 6,
  },
  errorIcon: {
    color: '#FF0000EE',
    alignSelf: 'flex-end',
  },
  messageContainer: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    maxWidth: '60%',
    backgroundColor: '#4b9cba',
  },
  content: {
    fontSize: 14,
  },
  date: {
    marginVertical: 4,
    fontSize: 10,
  },
});
