import { useEffect, useReducer, useRef, useState } from "react";
import style from './select.module.css';

type ActionType = {
   type: string
}
export type StateType = {
   isOpen: boolean
}
export const TOGGLE_CONSTANT = 'TOGGLE-ISOPEN';

export const reducer = (state:StateType, action:ActionType) => {
   switch (action.type){
      case TOGGLE_CONSTANT:
         return {
            ...state,
            isOpen: !state.isOpen
         }
      default:
         throw new Error('Bad action')
   }
   return state;
}

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
//   const [isOpen, setIsOpen] = useState(false);
  const [colappsed, dispatch] = useReducer(reducer, {isOpen:false});
  
  const selectRef = useRef(null);

  const handlerSelectClick = () => {
   //  setIsOpen(!isOpen);
    dispatch({type:TOGGLE_CONSTANT})
  };
  const handlerOptionClick = (value: string) => {
    setValue(value);
   //  setIsOpen(false);
   dispatch({type:TOGGLE_CONSTANT})
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
          <span className={`${style.selectArrow} ${colappsed.isOpen ? style.up : ""}`}>
            &#9662;
          </span>
        </div>
        {colappsed.isOpen ? 
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