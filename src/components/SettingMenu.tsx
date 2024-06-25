import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Button } from "./Button/Button";
import { Div, StyledInput } from "./styled/styledComponent";

type PropsType = {
  count: number;
  setCounter: (minCounter: number, maxCounter: number) => void;
  setMessage: Dispatch<SetStateAction<string>>;
  isCounterReset: boolean;
  minCounter: number;
  maxCounter: number;
  setMaxCounter: Dispatch<SetStateAction<number>>;
  setMinCounter: Dispatch<SetStateAction<number>>;
};

export const SettingMenu = ({
  count,
  setCounter,
  setMessage,
  isCounterReset,
  minCounter,
  maxCounter,
  setMaxCounter,
  setMinCounter,
}: PropsType) => {
  const maxCounterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    if (value >= minCounter && value > 0) {
      setMaxCounter(value);
    } else if (value < 0) {
      setMessage("значение не должно быть отрицательным");
    } else {
      setMessage("Максимальное значение должно быть больше минимального");
    }
  };
  const minCounterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    if (value <= maxCounter && value > 0) {
      setMinCounter(value);
    } else if (value < 0) {
      setMessage("значение не должно быть отрицательным");
    } else {
      setMessage("Минимальное значение должно быть меньше максимального");
    }
  };
  return (
    <>
      <Div>
        <Div $sizeHeight="20vh" $sizeWidth="40vh">
          <div>
            <label>max counter</label>
            <StyledInput
              onChange={maxCounterValue}
              value={maxCounter}
              disabled={false}
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
    </>
  );
};
