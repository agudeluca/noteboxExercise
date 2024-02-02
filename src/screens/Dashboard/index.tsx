import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';

import CheckMark from '@/assets/checkmark.svg';
import EmptyListImage from '@/assets/emptyList.png';
import SolidCheckMark from '@/assets/solidCheck.svg';
import FooterButton from '@/components/FooterButton';
import {useAppNavigation} from '@/navigation/hooks';
import {Routes} from '@/navigation/types';
import {getAll} from '@/store';
import type {Task} from '@/store/types';
import {useHandleStore} from '@/store/useHandleStore';

import styles from './styles';

const Dashboard = () => {
  const navigation = useAppNavigation();
  const {onRemove, isRefreshing, onEdit} = useHandleStore();
  const [tasks, setTasks] = React.useState<Task[]>([]);

  useFocusEffect(
    useCallback(() => {
      setTasks(getAll());
    }, [isRefreshing]),
  );

  const handleOnCreateTask = useCallback(() => {
    navigation.navigate(Routes.taskDetail, {isCreate: true});
  }, [navigation]);

  const handleOnEdit = useCallback(
    (item: Task) => () => {
      navigation.navigate(Routes.taskDetail, {
        isCreate: false,
        item,
      });
    },
    [navigation],
  );

  const handleCheck = useCallback(
    (item: Task) => () => {
      onEdit({...item, values: {...item.values, checked: !item.values.checked}});
    },
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: Task}): JSX.Element => (
      <View style={styles.item}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCheck(item)} style={styles.checksContainer}>
            {item.values.checked ? (
              <SolidCheckMark width={32} height={32} />
            ) : (
              <CheckMark width={32} height={32} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleContainer} onPress={handleOnEdit(item)}>
            <Text style={[styles.text, styles.bold, styles.title]}>{item.values.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRemove(item.id)} style={styles.removeButton}>
            <Text style={[styles.removeText, styles.bold]}>Remove</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleOnEdit(item)}>
          <Text style={[styles.text, styles.body]}>{item.values.text}</Text>
        </TouchableOpacity>
      </View>
    ),
    [tasks],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.containerImage}>
        <Image style={styles.image} source={EmptyListImage} />
        <Text style={styles.emptyText}>No tasks Created</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.containerScreen}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          ListEmptyComponent={renderEmptyComponent}
          data={tasks}
          renderItem={renderItem}
        />
      </View>
      <FooterButton onPress={handleOnCreateTask} label="Create Task" />
    </View>
  );
};

export default Dashboard;
