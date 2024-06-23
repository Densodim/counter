import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { StyledCounter, Div, StyledInput } from "./styled/styledComponent";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [countMax, setCountMax] = useState(0);
  const [minCounter, setMinCounter] = useState<number>(0);
  const [maxCounter, setMaxCounter] = useState<number>(0);
  const [message, setMessage] = useState("");

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

  const handleIncClick = () => {
    if (count < countMax) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("нажмите SET");
    }
  };
  const handleResetClick = () => {
    localStorage.clear();
    setCount(0);
    setMaxCounter(0);
    setMinCounter(0);
  };
  const maxCounterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
   const value = Number(event.currentTarget.value);
   if(value >= minCounter && value >0){
      setMaxCounter(value);
   }else if(value < 0){
      setMessage('значение не должно быть отрицательным');
   }else{
      setMessage('Максимальное значение должно быть больше минимального');
   }
    
  };
  const minCounterValue = (event: ChangeEvent<HTMLInputElement>) => {
   const value = Number(event.currentTarget.value);
   if (value <= maxCounter && value>0){
      setMinCounter(value);
   }else if(value <0){
      setMessage('значение не должно быть отрицательным');
   }else {
      setMessage('Минимальное значение должно быть меньше максимального');
   }
    
  };
  const setCounter = (minCounter: number, maxCounter: number) => {
    setCount(minCounter);
    setCountMax(maxCounter);
  };

  const isCountMore = count >= maxCounter;
  const isCounterReset = count === 0 && minCounter === 0 && maxCounter === 0;
  return (
    <>
      <StyledCounter>
        <Div>
          <Div $sizeHeight="20vh" $sizeWidth="40vh">
            <div>
              <label>max counter</label>
              <StyledInput
                onChange={maxCounterValue}
                value={maxCounter}
                disabled={countMax >= count ? false : true}
              />
            </div>
            <div>
              <label>min counter</label>
              <StyledInput
                onChange={minCounterValue}
                value={minCounter}
                disabled={count > -1 ? false : true}
              />
            </div>
          </Div>
          <Div $sizeHeight="10vh" $sizeWidth="40vh">
            <Button
              onClick={() => {
                setCounter(minCounter, maxCounter);
              }}
              disabled={isCounterReset}
            >
              SET
            </Button>
          </Div>
        </Div>
        <Div>
          <Div
            $sizeHeight="20vh"
            $sizeWidth="40vh"
            $color={isCountMore ? "red" : ""}
          >
            <h1>{message ? message : count}</h1>
          </Div>
          <Div $sizeHeight="10vh" $sizeWidth="40vh">
            <Button onClick={handleIncClick} disabled={isCountMore}>
              Click
            </Button>
            <Button onClick={handleResetClick} disabled={isCounterReset}>
              Reset
            </Button>
          </Div>
        </Div>
      </StyledCounter>
    </>
  );
};
