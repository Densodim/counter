import { reducer, StateType, TOGGLE_CONSTANT } from "./Select";

test ('test reduser change value to oppsite', () =>{
   // data
   const state:StateType = {
      isOpen:false
   }
   // action
   const newState = reducer(state, {type:TOGGLE_CONSTANT})
   // expection
   expect(newState.isOpen).toBe(true);
})

test ('test reduser shoud be false', () =>{
   // data
   const state:StateType = {
      isOpen:true
   }
   // action
   const newState = reducer(state, {type:TOGGLE_CONSTANT})
   // expection
   expect(newState.isOpen).toBe(false);
})

test ('test reduser should be error', () =>{
   // data
   const state:StateType = {
      isOpen:false
   }
   // action
   expect (()=>{
      reducer(state, {type:"FAKE"})
   }).toThrowError();
   
})