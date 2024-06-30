import { useEffect, useRef, useState } from "react";
import style from './select.module.css';

export const Select = () => {

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
   console.log('value', value);
   
    setValue(value);
    setIsOpen(false);
  };

//   const handlerClickOutside = () => {
//     if (selectRef.current) {
//       // setIsOpen(false);
//     }
//   };

//   useEffect(() => {
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
          <div>
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