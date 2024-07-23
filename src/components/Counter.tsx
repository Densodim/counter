import React, { useEffect, useReducer, useState } from "react";
import { StyledCounter } from "./styled/styledComponent";
import { SettingMenu } from "./SettingMenu";
import { DisplayMenu } from "./DisplayMenu/DisplayMenu";
import {
  counterAC,
  counterMaxAC,
  counterMessageAC,
  CounterReducer,
  StateType,
} from "./state/counterReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootType } from "./state/store";
import { setToLocalStorage } from "../local-and-session-storage/setToLocalStorage";

export const Counter = () => {
  const dispatch = useDispatch();

  const [maxCounter, setMaxCounter] = useState<number>(0);
  const [minCounter, setMinCounter] = useState<number>(0);

  const counterValue = useSelector<RootType, StateType>(
    (state) => state.counter
  );

  useEffect(() => {
    const getCount = localStorage.getItem("counterKey");
    const getMaxCounter = localStorage.getItem("maxCounter");
    const getMinCounter = localStorage.getItem("minCounter");
    if (getCount) {
      const newCount = JSON.parse(getCount);
      dispatch(counterAC(newCount));
    }
    if (getMaxCounter) {
      setMaxCounter(JSON.parse(getMaxCounter));
    }
    if (getMinCounter) {
      dispatch(counterAC(JSON.parse(getMinCounter)));
    }
  }, []);

  useEffect(() => {
    setToLocalStorage("counterKey", counterValue.count);
    //  localStorage.setItem("counterKey", JSON.stringify(counterValue.count));
  }, [counterValue]);

  //   useEffect(() => {
  //     localStorage.setItem("maxCounter", JSON.stringify(maxCounter));
  //   }, [maxCounter]);
  //   useEffect(() => {
  //     localStorage.setItem("minCounter", JSON.stringify(minCounter));
  //   }, [minCounter]);

  const setCounter = (minCounter: number, maxCounter: number) => {
    dispatch(counterAC(minCounter));
    dispatch(counterMaxAC(maxCounter));
  };

  const incClick = () => {
    if (counterValue.count < counterValue.countMax) {
      const newCount = counterValue.count + 1;
      dispatch(counterAC(newCount));
      dispatch(counterMessageAC(""));
    } else {
      dispatch(counterMessageAC("нажмите SET"));
    }
  };

  const ResetClick = () => {
    localStorage.clear();
    dispatch(counterAC(0));
    setMaxCounter(0);
    setMinCounter(0);
  };

  const maxCounterValue = (value: number) => {
    if (value >= minCounter && value > 0) {
      setMaxCounter(value);
    } else if (value < 0) {
      dispatch(counterMessageAC("значение не должно быть отрицательным"));
    } else {
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
      dispatch(counterMessageAC("значение не должно быть отрицательным"));
    } else {
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
