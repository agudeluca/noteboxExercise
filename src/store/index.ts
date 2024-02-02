import {MMKV} from 'react-native-mmkv';

import type {Task} from './types';

import { generateId } from '@/utils/store';

export const store: MMKV = new MMKV();

export const getAll = (): Task[] => {
  const keys = store.getAllKeys();
  return keys.map(key => {
    return {id: key, values: JSON.parse(store.getString(key))};
  });
};

export const create = (values: {title: string; text: string}): void => {
  store.set(generateId(), JSON.stringify(values));
};

export const remove = (id: string): void => {
  store.delete(id);
};

export const edit = (item: Task): void => {
  store.set(item.id, JSON.stringify(item.values));
};
