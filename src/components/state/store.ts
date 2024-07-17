import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./counterReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);

// @ts-ignore
window.store = store