import React, { useEffect, useReducer, useState } from "react";
import { StyledCounter } from "./styled/styledComponent";
import { SettingMenu } from "./SettingMenu";
import { DisplayMenu } from "./DisplayMenu/DisplayMenu";
import {
  counterAC,
  counterMaxAC,
  counterMessageAC,
  CounterReducer,
  TOOGLE_COUNT,
  TOOGLE_COUNT_MAX,
  TOOGLE_COUNT_MESSAGE,
} from "./state/counterReducer";

export const Counter = () => {
  //   const [count, setCount] = useState(0);
  //   const [countMax, setCountMax] = useState(0);
  //   const [message, setMessage] = useState("");
  const [maxCounter, setMaxCounter] = useState<number>(0);
  const [minCounter, setMinCounter] = useState<number>(0);

  const [counterValue, dispatch] = useReducer(CounterReducer, {
    count: 0,
    countMax: 0,
    message: "",
  });

  useEffect(() => {
    const getCount = localStorage.getItem("counterKey");
    const getMaxCounter = localStorage.getItem("maxCounter");
    const getMinCounter = localStorage.getItem("minCounter");
    if (getCount) {
      const newCount = JSON.parse(getCount);
      dispatch(counterAC(newCount));
      // setCount(newCount);
    }
    if (getMaxCounter) {
      setMaxCounter(JSON.parse(getMaxCounter));
    }
    if (getMinCounter) {
      dispatch(counterAC(JSON.parse(getMinCounter)));
      // setCount(JSON.parse(getMinCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterKey", JSON.stringify(counterValue.count));
  }, [counterValue]);

  //   useEffect(() => {
  //     localStorage.setItem("maxCounter", JSON.stringify(maxCounter));
  //   }, [maxCounter]);
  //   useEffect(() => {
  //     localStorage.setItem("minCounter", JSON.stringify(minCounter));
  //   }, [minCounter]);

  const setCounter = (minCounter: number, maxCounter: number) => {
    //  setCount(minCounter);
    dispatch(counterAC(minCounter));
    dispatch(counterMaxAC(maxCounter));
    //  setCountMax(maxCounter);
  };

  const incClick = () => {
    if (counterValue.count < counterValue.countMax) {
      const newCount = counterValue.count + 1;
      dispatch(counterAC(newCount));
      // setCount(count.count + 1);
      // setMessage("");
      dispatch(counterMessageAC(""));
    } else {
      // setMessage("нажмите SET");
      dispatch(counterMessageAC("нажмите SET"));
    }
  };

  const ResetClick = () => {
    localStorage.clear();
    dispatch(counterAC(0));
    //  setCount(0);
    setMaxCounter(0);
    setMinCounter(0);
  };

  const maxCounterValue = (value: number) => {
    if (value >= minCounter && value > 0) {
      setMaxCounter(value);
    } else if (value < 0) {
      // setMessage("значение не должно быть отрицательным");
      dispatch(counterMessageAC("значение не должно быть отрицательным"));
    } else {
      // setMessage("Максимальное значение должно быть больше минимального");
      dispatch(
        counterMessageAC(
          "Максимальное значение должно быть больше минимального"
        )
      );
    }
  };

  const minCounterValue = (value: number) => {
    if (value <= maxCounter && value > 0) {
      setMinCounter(value);
    } else if (value < 0) {
      // setMessage("значение не должно быть отрицательным");
      dispatch(counterMessageAC("значение не должно быть отрицательным"));
    } else {
      // setMessage("Минимальное значение должно быть меньше максимального");
      dispatch(
        counterMessageAC(
          "Минимальное значение должно быть меньше максимального"
        )
      );
    }
  };

  const isCountMore = counterValue.count >= maxCounter;
  const isCounterReset =
    counterValue.count === 0 && minCounter === 0 && maxCounter === 0;
  const isMessage = counterValue.message
    ? counterValue.message
    : counterValue.count;
  return (
    <>
      <StyledCounter>
        <SettingMenu
          count={counterValue.count}
          setCounter={setCounter}
          isCounterReset={isCounterReset}
          minCounter={minCounter}
          maxCounter={maxCounter}
          maxCounterValue={maxCounterValue}
          minCounterValue={minCounterValue}
        />

        <DisplayMenu
          incClick={incClick}
          ResetClick={ResetClick}
          isCountMore={isCountMore}
          isCounterReset={isCounterReset}
          isMessage={isMessage}
        />
      </StyledCounter>
    </>
  );
};
