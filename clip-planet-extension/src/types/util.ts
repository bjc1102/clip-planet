export interface StateType {
  loading: boolean;
  data: unknown;
  error: any;
}

export type Action = "SUCCESS" | "ERROR" | "LOADING";

export interface ActionType<Type> {
  type: Action;
  data?: Type;
  error?: unknown;
}

export type CreateObjType<T> = {
  [key in keyof T]: T[key];
};
