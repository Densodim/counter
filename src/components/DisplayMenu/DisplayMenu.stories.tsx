import type { Meta, StoryObj } from '@storybook/react';

import { DisplayMenu } from './DisplayMenu';
import { Div } from '../styled/styledComponent';
import { Button } from '../Button/Button';
import { useState } from 'react';
 
const meta: Meta<typeof DisplayMenu> = {
  component: DisplayMenu,
};
 
export default meta;
type Story = StoryObj<typeof DisplayMenu>;
 
export const DisplayMenuDemo: Story = {
  args: {
   incClick: ()=>{},
   ResetClick:()=>{},
   isCountMore: true,
   isCounterReset: true,
   isMessage:'test value',
  },
};
 
interface DisplayMenuProps {
   isCountMore: boolean
   isCounterReset:boolean
   isMessage:number | string
   handleIncClick:()=>void
   handleResetClick:()=>void
}

export const DisplayMenuView = ({
   isCountMore = false,
   isCounterReset = false,
   handleResetClick = ()=>{},
}:DisplayMenuProps)=> {
   let [count, setCount] = useState(0);
   const handleIncClick = ()=>{setCount(count++)}
   return (
      <>
      <Div>
        <Div
          $sizeHeight="20vh"
          $sizeWidth="40vh"
          $color={isCountMore ? "red" : ""}
        >
          <h1>{count}</h1>
        </Div>
        <Div $sizeHeight="10vh" $sizeWidth="40vh">
          <Button onClick={handleIncClick} disabled={isCountMore}>
            Click
          </Button>
          <Button onClick={handleResetClick} disabled={isCounterReset}>
            Reset
          </Button>
        </Div>
      </Div>
    </>
   )
}