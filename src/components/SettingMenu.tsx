import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Button } from "./Button/Button";
import { Div, StyledInput } from "./styled/styledComponent";

type PropsType = {
  count: number;
  setCounter: (minCounter: number, maxCounter: number) => void;
  isCounterReset: boolean;
  minCounter: number;
  maxCounter: number;
  maxCounterValue:(value: number) => void
  minCounterValue:(value: number) => void
};

export const SettingMenu = ({
  count,
  setCounter,
  isCounterReset,
  minCounter,
  maxCounter,
  maxCounterValue,
  minCounterValue,
}: PropsType) => {
  const handlerMaxCounterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
   maxCounterValue(Number(event.currentTarget.value));
  };
  const handlerMinCounterValue = (event: ChangeEvent<HTMLInputElement>) => {
   minCounterValue(Number(event.currentTarget.value));
  };
  return (
    <>
      <Div>
        <Div $sizeHeight="20vh" $sizeWidth="40vh">
          <div>
            <label>max counter</label>
            <StyledInput
              onChange={handlerMaxCounterValue}
              value={maxCounter}
              disabled={false}
            />
          </div>
          <div>
            <label>min counter</label>
            <StyledInput
              onChange={handlerMinCounterValue}
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
    </>
  );
};
