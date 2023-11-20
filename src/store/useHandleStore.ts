import React from 'react';

import type { Task } from './types';

import {create, remove} from './index';

export const useHandleStore = (): {
  onRemove: (id: string) => () => void,
  onAdd: (value: Task) => void,
  isRefreshing: boolean,
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
    (value: Task) => {
      setIsRefreshing(true);
      create(value);
    },
    [],
  );

  return {onRemove, onAdd, isRefreshing};
};
