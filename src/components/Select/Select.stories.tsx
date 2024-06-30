import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";

import * as React from "react";
import { Select } from "./Select";

import style from './input.module.css';

const meta: Meta<typeof Select> = {
   component: Select,
 };

 export default meta;
type Story = StoryObj<typeof Select>;

export const SelectControledOnDiv = () => {

   type OptionType = {
       title: string; 
       value: string; 
   }[]
  const options:OptionType = [
    { title: "Десять", value: "10" },
    { title: "Двадцать", value: "20" },
    { title: "Тридцать", value: "30" },
  ];

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);

  const handlerSelectClick = () => {
    setIsOpen(!isOpen);
  };
  const handlerOptionClick = (value: string) => {
    setValue(value);
    setIsOpen(false);
  };

//   const handlerClickOutside = () => {
//     console.log(selectRef.current);

//     if (selectRef.current) {
//       // setIsOpen(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener("mousedown", handlerClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handlerClickOutside);
//     };
//   }, []);

  return (
    <>
      <div className={style.customSelect} ref={selectRef}>
        <div
          className={style.selectSelected}
          onClick={handlerSelectClick}
        >
          {value || "Выберите значение"}
          <span className={`${style.selectArrow} ${isOpen ? style.up : ""}`}>
            &#9662;
          </span>
        </div>
        {isOpen ? 
          <div className={style.selectItems}>
           {options.map((el, index)=>
            <div key={index} onClick={()=>handlerOptionClick(el.title)}>{el.title}</div>
           )}
          </div>
          : (
          <span>'Выберите значение'</span>
        )}
      </div>
    </>
  );
};
