import React from "react";

// import './App.css';
import { Counter } from "./components/Counter";
import { Select } from "./components/Select/Select";

import { Theme, ThemePanel  } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <div className="App">
      {/* <Select/> */}
      <Theme radius={'medium'}>
        <Counter />
        <ThemePanel/>
      </Theme>
    </div>
  );
}

export default App;
