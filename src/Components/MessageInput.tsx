import React from 'react';
import { TextInput, StyleSheet, ActivityIndicator, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '@/Redux/Actions/MessageActions';
import { AppState } from '@/Redux/Reducers';
type Props = {};

const MessageInput = ({}: Props) => {
  const [text, setText] = React.useState<string>('');

  //listen text changing but rerender only if text has changed
  const onChangeText = (value: string) => {
    if (value !== text) {
      setText(value);
    }
  };

  const { t } = useTranslation();
  const dispatch = useDispatch();

  //get status onf message to display loader and reset text on success
  const isSending = useSelector((state: AppState) => {
    const isLoading = state.messageState.isLoading;
    if (isLoading) {
      onChangeText('');
    }
    return isLoading;
  });

  const sendNewMessage = () => {
    dispatch(sendMessage(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={t('placeholder.message')}
        onEndEditing={sendNewMessage}
        editable={!isSending}
        enablesReturnKeyAutomatically
      />
      {isSending && <ActivityIndicator size="small" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    alignSelf: 'center',
    borderColor: 'gray',
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
});

export default MessageInput;
