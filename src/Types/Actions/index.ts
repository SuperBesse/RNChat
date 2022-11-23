export type ActionType<T> = {
  type: string;
  payload: T;
};

export type DispatchFunction = (action: ActionType<any>) => any;
