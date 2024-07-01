// import type { Meta, StoryObj } from "@storybook/react";

import React, { memo, useState } from "react";

export default {
  title: "React Memo demo",
};

const NewMessage = (props: { count: number }) => {
   console.log('newMessage');
   
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
   console.log('users');
   
  return (
    <div>
      {props.users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </div>
  );
};

const Users = memo(UsersSecret);

export const Example1 = () => {
   console.log('Example');
   
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["DIma", "Ivan", "Petro"]);

  const addUser = () => {
   const newUsers = [...users, 'Nikita' + new Date().getTime()]
   setUsers(newUsers);
  };
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>
        add user
      </button>
      <NewMessage count={counter} />
      <Users users={users} />
    </>
  );
};
