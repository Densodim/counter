import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory:Story = {
   args: {
      children:'SET',
      onClick:()=>{},
      disabled:true
    },
}

export const ButtonDisabledOn =()=> {
  return <Button
  onClick={() => {}}
  disabled={true}
>
  SET
</Button>
};

export const ButtonDisabledOff =()=> {
   return <Button
  onClick={() => {}}
  disabled={false}
>
  SET
</Button>
}

export const ButtonDemo = () =>{
   const [disabled, setDisabled] = useState(false);

   return <Button
              onClick={() => {setDisabled(!disabled)}}
              disabled={disabled}
            >
              SET
            </Button>
}