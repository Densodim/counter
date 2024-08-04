import { FC, useEffect, useState } from "react";
import { AnalogClock } from "./AnalogClock";
import { title } from "process";

type PropsType = {};

export const Clock: FC<PropsType> = (props) => {
  const [data, setData] = useState(new Date(Date.UTC(2022, 0, 1, 0, 0, 0)));
  const [city, setSity] = useState({city:'Minsk', datediff:1});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
    }, 1000);

    return ()=>{
      clearInterval(intervalId)
    }
  }, []);

  const get2digitsString = (number: number) =>
    number < 10 ? "0" + number : number;

  const secondsString = get2digitsString(data.getSeconds());
  const hoursString = get2digitsString(data.getHours());
  const minutesString = get2digitsString(data.getMinutes());

   const handleData = (city:string, datediff:number) => {
      setSity(
         {city, datediff}
      );
   }

  return (
    <>
    <AnalogClock title={city.city} datediff={city.datediff}/>
      <div>
         <button onClick={()=>{handleData('Minsk', 1)}}>Minsk</button>
         <button onClick={()=>{handleData('Tokyo', 6)}}>Tokyo</button>
         <button onClick={()=>{handleData('London', 9)}}>London</button>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
      </div>
    </>
  );
};



