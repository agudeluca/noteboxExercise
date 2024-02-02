import type { Task } from '@/store/types';

export type RouteParamList = {
  [Routes.dashboard]: undefined;
  [Routes.taskDetail]: {
    isCreate: boolean;
    item?: Task;
  };
};

export enum Routes {
  dashboard = 'dashboard',
  taskDetail = 'taskDetail',
}
