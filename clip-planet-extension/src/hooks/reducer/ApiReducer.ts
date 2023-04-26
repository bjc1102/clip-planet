import { ActionType, StateType } from "../../types/util";

export const ApiStatusReducer = function <Type>(
  state: StateType,
  action: ActionType<Type>
): StateType {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: action.data,
        error: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
