export const TOOGLE_COUNT = "count";
export const TOOGLE_COUNT_MAX = "countMax";
export const TOOGLE_COUNT_MESSAGE = "message";

export type CountType = {
  type: "TOOGLE_COUNT";
  newCount: number;
};

export type CountMaxType = {
  type: "TOOGLE_COUNT_MAX";
  maxCounter: number;
};
export type CountMessageType = {
  type: "TOOGLE_COUNT_MESSAGE";
  message: string;
};

export type StateType = {
  count: number;
  countMax: number;
  message: string;
};

export type ActionsType = CountType | CountMaxType | CountMessageType;

export const CounterReducer = (
  state: StateType,
  action: ActionsType
): StateType => {
  debugger;
  switch (action.type) {
    case "TOOGLE_COUNT":
      return {
        ...state,
        count: action.newCount,
      };
    case "TOOGLE_COUNT_MAX":
      return {
        ...state,
        countMax: action.maxCounter,
      };
    case "TOOGLE_COUNT_MESSAGE":
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export const counterAC = (newCount: number): CountType => ({
  type: "TOOGLE_COUNT",
  newCount,
});
export const counterMaxAC = (maxCounter: number): CountMaxType => ({
  type: "TOOGLE_COUNT_MAX",
  maxCounter,
});
export const counterMessageAC = (message: string): CountMessageType => ({
  type: "TOOGLE_COUNT_MESSAGE",
  message,
});
