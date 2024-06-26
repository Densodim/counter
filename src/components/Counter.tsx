import React, {useEffect, useState } from "react";
import { StyledCounter} from "./styled/styledComponent";
import { SettingMenu } from "./SettingMenu";
import { DisplayMenu } from "./DisplayMenu/DisplayMenu";

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

  const maxCounterValue = (value:number) => {
   if (value >= minCounter && value > 0) {
     setMaxCounter(value);
   } else if (value < 0) {
     setMessage("значение не должно быть отрицательным");
   } else {
     setMessage("Максимальное значение должно быть больше минимального");
   }
 };

 const minCounterValue = (value:number) => {
   if (value <= maxCounter && value > 0) {
     setMinCounter(value);
   } else if (value < 0) {
     setMessage("значение не должно быть отрицательным");
   } else {
     setMessage("Минимальное значение должно быть меньше максимального");
   }
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
