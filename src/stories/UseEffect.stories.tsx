
import { log } from "console";
import { useEffect, useState } from "react";

export default {
  title: "UseEffect demo",
};

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("useEffect");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export const SetTimeoutExample = () => {
  const [counter, setCounter] = useState(1);

  
  // useEffect(()=>{
  //    setTimeout(()=>{
  //       console.log('setTimeout');
  //       document.title = counter.toString();
  //    }, 1000);
  // }, []);
  useEffect(() => {
   const data = new Date();
   console.log(data);
   
    setInterval(() => {
      return setCounter((prevState)=>prevState +1);
    }, 1000);
  }, []);

  return (
    <>
      Hello {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};
