import React from 'react';

import { MessageInput, MessageList } from '@/Components';
import { StyleSheet, View } from 'react-native';

const ChatContainer = () => {
  return (
    <View style={styles.container}>
      <MessageList />
      <MessageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatContainer;
