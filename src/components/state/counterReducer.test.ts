import {
  counterAC,
  counterMaxAC,
  counterMessageAC,
  CounterReducer,
  CountMaxType,
  CountType,
  StateType,
} from "./counterReducer";

test("counter should be change", () => {
  // data
  const count: StateType = {
    count: 0,
    countMax: 0,
    message: "",
  };

  const action: CountType = counterAC(1);

  const endState = CounterReducer(count, action);

  expect(endState.count).toBe(1);
  expect(endState.countMax).toBe(0);
  expect(endState.message).toBeDefined;
});

test("counter MAX should be max number", () => {
  // data
  const count: StateType = {
    count: 0,
    countMax: 0,
    message: "",
  };
  const action: CountMaxType = counterMaxAC(1);

  const endState = CounterReducer(count, action);

  expect(endState.count).toBe(0);
  expect(endState.countMax).toBe(1);
  expect(endState.message).toBe("");
});

test("counter message should be changed", () => {
  // data
  const count: StateType = {
    count: 0,
    countMax: 0,
    message: "",
  };

  const endState = CounterReducer(count, counterMessageAC("new message"));

  expect(endState.count).toBe(0);
  expect(endState.countMax).toBe(0);
  expect(endState.message).toBe("new message");
});
