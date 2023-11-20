import React, {useCallback} from 'react';
import {View, TextInput, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useAppNavigation} from '@/navigation/hooks';
import {useHandleStore} from '@/store/useHandleStore';

import styles from './styles';

const CreateTask = () => {
  const navigation = useAppNavigation();
  const [title, onTitle] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const {onAdd} = useHandleStore();
  const handleSubmit = useCallback(() => {
    onAdd({title, text});
    navigation.goBack();
  }, [title, text]);

  const disabled = React.useMemo(() => {
    return !title || !text;
  }, [title, text]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAWareScrollView}>
          <Text testID="title" style={styles.label}>
            Title
          </Text>
          <TextInput testID="input-title" style={styles.input} onChangeText={onTitle} value={title} />
          <Text testID="details" style={styles.label}>Details</Text>
          <TextInput
            testID="input-text"
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
            onChangeText={onChangeText}
            value={text}
          />
        </KeyboardAwareScrollView>
        <TouchableOpacity
          disabled={disabled}
          onPress={handleSubmit}
          style={[styles.footerButton, disabled && styles.disabledFooterButton]}
        >
          <Text style={[styles.footerText]}>Done</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default CreateTask;
