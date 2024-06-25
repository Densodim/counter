import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { StyledCounter, Div, StyledInput } from "./styled/styledComponent";
import { Button } from "./Button/Button";
import { SettingMenu } from "./SettingMenu";
import { DisplayMenu } from "./DisplayMenu";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [countMax, setCountMax] = useState(0);
  const [message, setMessage] = useState("");
  const [maxCounter, setMaxCounter] = useState<number>(0);
  const [minCounter, setMinCounter] = useState<number>(0);

  useEffect(() => {
    const getCount = localStorage.getItem("counterKey");
    const getMaxCounter = localStorage.getItem("maxCounter");
    const getMinCounter = localStorage.getItem("minCounter");
    if (getCount) {
      const newCount = JSON.parse(getCount);
      setCount(newCount);
    }
    if (getMaxCounter) {
      setMaxCounter(JSON.parse(getMaxCounter));
    }
    if (getMinCounter) {
      setCount(JSON.parse(getMinCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterKey", JSON.stringify(count));
  }, [count]);

  //   useEffect(() => {
  //     localStorage.setItem("maxCounter", JSON.stringify(maxCounter));
  //   }, [maxCounter]);
  //   useEffect(() => {
  //     localStorage.setItem("minCounter", JSON.stringify(minCounter));
  //   }, [minCounter]);

  const setCounter = (minCounter: number, maxCounter: number) => {
    setCount(minCounter);
    setCountMax(maxCounter);
  };

  const incClick = () => {
    if (count < countMax) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("нажмите SET");
    }
  };

  const ResetClick = () => {
    localStorage.clear();
    setCount(0);
    setMaxCounter(0);
    setMinCounter(0);
  };

  const isCountMore = count >= maxCounter;
  const isCounterReset = count === 0 && minCounter === 0 && maxCounter === 0;
  const isMessage = message ? message : count;
  return (
    <>
      <StyledCounter>
        <SettingMenu
          count={count}
          setCounter={setCounter}
          setMessage={setMessage}
          isCounterReset={isCounterReset}
          minCounter={minCounter}
          maxCounter={maxCounter}
          setMaxCounter={setMaxCounter}
          setMinCounter={setMinCounter}
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
