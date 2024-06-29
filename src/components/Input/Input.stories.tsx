import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useRef, useState } from "react";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const FirstStory: Story = {
  args: {
    label: "min or max counter",
    disabled: true,
  },
};

export const ControlerInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        onChange={(event) => {
          const actialValue = event.currentTarget.value;
          setValue(actialValue);
        }}
        value={value}
      />{" "}
      - {value}
    </>
  );
};

export const ControllerCheckbox = () => {
  const [value, setValue] = useState(true);
  return (
    <>
      <input
        type="checkbox"
        onChange={(event) => {
          const actialValue = event.currentTarget.checked;
          setValue(actialValue);
        }}
        checked={value}
      />
    </>
  );
};

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      >
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Grodno</option>
        <option value={"3"}>Gomel</option>
      </select>
      {/* <input type='checkbox' onChange={(event)=>{
         const actialValue = event.currentTarget.checked;
         setValue(actialValue)
      }} checked={value}/> */}
    </>
  );
};

export const ControlerInputUseRefOnButtonPres = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {/* <input id={'inputId'}/> <button onClick={(event)=>{
         const el = document.getElementById('inputId') as HTMLInputElement
         setValue(el.value) */}
      {/* // не правильный вариант не соотвествует принципам реакта  */}
      <input ref={inputRef} />{" "}
      <button
        onClick={() => {
          const el = inputRef.current as HTMLInputElement;
          setValue(el.value);
        }}
      >
        save
      </button>{" "}
      - {value}
    </>
  );
};

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType;
};

export const SelectArray = () => {
  const [value, setValue] = useState([
    { title: "Minsk", value: "1" },
    { title: "Grodno", value: "2" },
  ]);

  return (
    <>
      <div>
        <div>{}</div>
        {value.map((el) => (
          <div>{el.title}</div>
        ))}
      </div>
    </>
  );
};

export const SelectVariants = () => {
  const items = [
    { title: "Ten", value: "10" },
    { title: "Twenty", value: "20" },
    { title: "Thirty", value: "30" },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items.map((el) => (
              <MenuItem value={el.value}>{el.title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>{age}</div>
    </>
  );
};
