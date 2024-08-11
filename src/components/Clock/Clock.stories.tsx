import { Meta, StoryObj } from "@storybook/react/*";
import { Clock } from "./Clock";
import { useEffect, useState } from "react";

const meta: Meta<typeof Clock> = {
  title: "Rect/Clock",
  component: Clock,
  //   parameters: {
  //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //     layout: "centered",
  //   },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const BaseExample = () => {
  return <Clock />;
};

export const KeysTracker = () => {
  const [text, setText] = useState("");

  console.log("Component with" + text);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText((PrevState) => PrevState + e.key);
    };

    window.addEventListener("keypress", handler);
    
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, []);
  return <>Typed text: {text}</>;
};

// export const KeysTrackerStory = {
//   render: <KeysTracker />,
// };
