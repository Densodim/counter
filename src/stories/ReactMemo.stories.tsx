// import type { Meta, StoryObj } from "@storybook/react";

import React, { memo, useCallback, useMemo, useState } from "react";

export default {
  title: "React Memo demo + useMemo",
};

const NewMessage = (props: { count: number }) => {
  console.log("newMessage");

  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("users");

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
  console.log("Example1 User");

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["DIma", "Ivan", "Petro"]);

  const addUser = () => {
    const newUsers = [...users, "Nikita" + new Date().getTime()];
    setUsers(newUsers);
  };
  const userMemo = useMemo(() => {
    return users.filter((el) => el.toLowerCase().indexOf("a") > -1);
  }, [users]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessage count={counter} />
      <Users users={userMemo} />
    </>
  );
};

export const Example2useMemo = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let resultAValue = 1;
    for (let i = 1; i <= a; i++) {
      resultAValue = resultAValue * i;
    }
    return resultAValue;
  }, [a]);

  resultB = useMemo(() => {
    let resultBValue = 1;
    for (let i = 1; i <= b; i++) {
      resultBValue = resultBValue * i;
    }
    return resultBValue;
  }, [b]);

  return (
    <>
      <div>
        <input
          value={a}
          onChange={(e) => {
            setA(Number(e.currentTarget.value));
          }}
        />
        <input
          value={b}
          onChange={(e) => {
            setB(Number(e.currentTarget.value));
          }}
        />
      </div>
      <div>Result A: {resultA}</div>
      <div>Result B: {resultB}</div>
    </>
  );
};

// useCallback

type BooksSecretType = {
  // books:Array<string>
  addBooks: () => void;
};

const BookSecret = (props: BooksSecretType) => {
  console.log("BookSecret");

  return (
    <div>
      <button onClick={() => props.addBooks()}>add book</button>

      {/* {props.books.map((book, index) => (
        <div key={index}>{book}</div>
      ))} */}
    </div>
  );
};

const Book = memo(BookSecret);

export const likeUseCallback = () => {
  console.log("likeUseCallback");

  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["JS", "HTML", "REACT", "TypeScript"]);

  const addBooks = () => {
    const newBooks = [...books, "VUE" + new Date().getTime()];
    setBooks(newBooks);
  };
  const userMemo = useMemo(() => {
    return () => {
      const newBooks = [...books, "VUE" + new Date().getTime()];
      setBooks(newBooks);
    };
  }, [books]);

  const booksUseCallback = useCallback(() => {
      const newBooks = [...books, "VUE" + new Date().getTime()];
      setBooks(newBooks);
  }, [books]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addBooks}>add book</button>
      <NewMessage count={counter} />
      <Book addBooks={booksUseCallback} />
    </>
  );
};
