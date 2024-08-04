import { FC, useEffect, useState } from "react";
import style from "./Clock.module.css";

export type AnalogClockPropsType = {
   title: string
   datediff: number
};

export const AnalogClock: FC<AnalogClockPropsType> = ({title, datediff}:AnalogClockPropsType) => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const get2digitsString = (number: number, time:number) =>
    number < 10 ? "0" + number * time : number * time;

  let hours = data.getHours() + datediff;
  const secondsString = get2digitsString(data.getSeconds(), 6);
  const hoursString = get2digitsString(hours, 9);
  const minutesString = get2digitsString(data.getMinutes(), 3);

  return (
    <>
      <div className={style.clock}>
         <h2>{title}</h2>
        <div
          className={style.hour_hand}
          style={{
            transform: `rotateZ(${hoursString}deg)`,
          }}
        />
        <div
          className={style.min_hand}
          style={{
            transform: `rotateZ(${minutesString}deg)`,
          }}
        />
        <div
          className={style.sec_hand}
          style={{
            transform: `rotateZ(${secondsString}deg)`,
          }}
        />
        <span className={style.twelve}>12</span>
        <span className={style.one}>1</span>
        <span className={style.two}>2</span>
        <span className={style.three}>3</span>
        <span className={style.four}>4</span>
        <span className={style.five}>5</span>
        <span className={style.six}>6</span>
        <span className={style.seven}>7</span>
        <span className={style.eight}>8</span>
        <span className={style.nine}>9</span>
        <span className={style.ten}>10</span>
        <span className={style.eleven}>11</span>
      </div>
    </>
  );
};
