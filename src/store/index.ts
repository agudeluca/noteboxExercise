import {MMKV} from 'react-native-mmkv';

import type { Task } from './types';

export const store: MMKV = new MMKV();

export const getAll = (): {id: string; value: Task}[] => {
  const keys = store.getAllKeys();
  return keys.map(key => {
    return {id: key, value: JSON.parse(store.getString(key))};
  });
};

export const create = (value: Task): void => {
  store.set(Math.random().toString(16).slice(2), JSON.stringify(value));
};

export const remove = (id: string): void => {
  store.delete(id);
}
