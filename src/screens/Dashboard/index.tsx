import { useFocusEffect } from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';

import LoadingOrErrorWrapper from '@/components/LoadingOrErrorWrapper';
import {useAppNavigation} from '@/navigation/hooks';
import {Routes} from '@/navigation/types';
import {getAll} from '@/store';
import type {Task} from '@/store/types';
import {useHandleStore} from '@/store/useHandleStore';

import styles from './styles';

const Dashboard = () => {
  const navigation = useAppNavigation();
  const {onRemove, isRefreshing} = useHandleStore();
  const [tasks, setTasks] = React.useState<{id: string; value: Task}[]>([]);

  useFocusEffect(
    useCallback(() => {
      setTasks(getAll());
    }, [isRefreshing]),
  );

  const handleOnCreateTask = useCallback(() => {
    navigation.navigate(Routes.createTask);
  }, [navigation]);

  const renderItem = useCallback(
    ({item}: {item: {id: string; value: Task}}): JSX.Element => {
      return (
        <View style={styles.item}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.bold, styles.title]}>{item.value.title}</Text>
            <TouchableOpacity onPress={onRemove(item.id)} style={styles.removeButton}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, styles.body]}>{item.value.text}</Text>
        </View>
      );
    },
    [tasks],
  );

  return (
    <LoadingOrErrorWrapper loading={false} theme="light">
      <>
        <View style={styles.container}>
          <FlatList style={styles.list} data={tasks} renderItem={renderItem} />
        </View>
        <TouchableOpacity style={styles.footerButton} onPress={handleOnCreateTask}>
          <Text style={[styles.text, styles.footerText]}>Create Task</Text>
        </TouchableOpacity>
      </>
    </LoadingOrErrorWrapper>
  );
};

export default Dashboard;
