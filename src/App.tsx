import React from "react";

// import './App.css';
import { Counter } from "./components/Counter";
import { Select } from "./components/Select/Select";

import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import styles from "./components/Site.module.css";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from "./components/pages/PageTwo";
import { PageThree } from "./components/pages/PageThree";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const PATH = {
  PAGE1: "/page1",
  PAGE2: "/page2",
  PAGE3: "/page3",
  ERROR: "/error404",
} as const;

function App() {
  return (
    // <div>
    //   <div className={styles.header}>
    //     <h1>HEADER</h1>
    //   </div>
    //   <div className={styles.body}>
    //     <div className={styles.nav}>
    //       <div>
    //         <NavLink
    //           to={PATH.PAGE1}
    //           className={({ isActive }) =>
    //            isActive ? styles.activeNavLink : styles.navLink
    //          }>
    //           Page 1
    //         </NavLink>
    //       </div>
    //       <div>
    //         <NavLink
    //           to={PATH.PAGE2}
    //           className={({ isActive }) =>
    //             isActive ? styles.activeNavLink : styles.navLink
    //           }
    //         >
    //           Page 2
    //         </NavLink>
    //       </div>
    //       <div>
    //         <NavLink
    //           to={PATH.PAGE3}
    //           className={({ isActive }) =>
    //             isActive ? styles.activeNavLink : styles.navLink
    //           }
    //         >
    //           Page 3
    //         </NavLink>
    //       </div>
    //     </div>
    //     <div className={styles.content}>
    //       <Routes>
    //         <Route path="/" element={<Navigate to={"/page1"} />} />
    //         <Route path={PATH.PAGE1} element={<PageOne />} />
    //         <Route path={PATH.PAGE2} element={<PageTwo />} />
    //         <Route path={PATH.PAGE3} element={<PageThree />} />
    //         <Route path={PATH.ERROR} element={<Error404 />} />
    //         <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
    //       </Routes>
    //     </div>
    //   </div>
    //   <div className={styles.footer}>abibas 2023</div>
    // </div>

    <div className="App">
      {/* <Select/> */}
      
        <Theme radius={"medium"}>
          <Counter />
          <ThemePanel />
        </Theme>  
    </div>
  );
}

export default App;
