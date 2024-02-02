import React from 'react';

import type { Task } from './types';

import {create, remove, edit} from './index';

export const useHandleStore = (): {
  onRemove: (id: string) => () => void,
  onAdd: (item: Task) => void,
  isRefreshing: boolean,
  onEdit: (item: Task) => void,
} => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  React.useEffect(() => {
    if (isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  const onRemove = React.useCallback(
    (id: string) => () => {
      setIsRefreshing(true);
      remove(id);
    },
    [],
  );

  const onAdd = React.useCallback(
    (item: Task) => {
      setIsRefreshing(true);
      create(item.values);
    },
    [],
  );

  const onEdit = React.useCallback(
    (item: Task) => {
      setIsRefreshing(true);
      edit(item);
    },
    [],
  );

  return {onRemove, onAdd, isRefreshing, onEdit};
};
