import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, TextInput, Text, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import FooterButton from '@/components/FooterButton';
import {useAppNavigation, useRouteDetails} from '@/navigation/hooks';
import {useHandleStore} from '@/store/useHandleStore';
import {generateId} from '@/utils/store';

import styles from './styles';

const TaskDetail = () => {
  const navigation = useAppNavigation();
  const {isCreate, item} = useRouteDetails().params;
  const [title, onTitle] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const {onEdit, onAdd} = useHandleStore();

  useFocusEffect(
    useCallback(() => {
      if (item) {
        onTitle(item.values.title);
        onChangeText(item.values.text);
      }
    }, []),
  );

  const handleSubmit = useCallback(() => {
    if (isCreate) {
      onAdd({id: generateId(), values: {title, text}});
    } else {
      onEdit({...item, values: {...item.values, title, text}});
    }
    navigation.goBack();
  }, [title, text, item, navigation]);

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
          <TextInput
            testID="input-title"
            style={styles.input}
            onChangeText={onTitle}
            value={title}
          />
          <Text testID="details" style={styles.label}>
            Details
          </Text>
          <TextInput
            testID="input-text"
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
            onChangeText={onChangeText}
            value={text}
          />
        </KeyboardAwareScrollView>
        <FooterButton label="Done" onPress={handleSubmit} isDisabled={disabled} />
      </SafeAreaView>
    </View>
  );
};

export default TaskDetail;
