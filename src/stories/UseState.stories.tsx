import { useState } from "react";

export default {
  title: "useState demo",
};

function generateData() {
  console.log("generate Data");
  return 1;
}
export const Example1 = () => {
  console.log("Example");

  const [counter, setCounter] = useState(generateData);
  const [user, setUser] = useState(["Petro", "Ivan", "Kolia", "Sveta"]);

  const addUser = () => {
    const newUser = [...user, "Sveta2" + new Date().getTime()];
    setUser(newUser);
  };

  return (
    <>
      <button onClick={() => setCounter(state => state +1)}>+</button>
      <button onClick={addUser}>add user</button>
      <div>Counter: {counter}</div>
      <div>User:{user}</div>
    </>
  );
};
