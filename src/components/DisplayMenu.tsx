import { Button } from "./Button/Button";
import { Div } from "./styled/styledComponent";

type PropsType = {
  incClick: () => void;
  ResetClick: () => void;
  isCountMore: boolean;
  isCounterReset: boolean;
  isMessage: string | number;
};

export const DisplayMenu = ({
  incClick,
  ResetClick,
  isCountMore,
  isCounterReset,
  isMessage,
}: PropsType) => {
  const handleIncClick = () => {
    incClick();
  };
  const handleResetClick = () => {
    ResetClick();
  };
  return (
    <>
      <Div>
        <Div
          $sizeHeight="20vh"
          $sizeWidth="40vh"
          $color={isCountMore ? "red" : ""}
        >
          <h1>{isMessage}</h1>
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
  );
};
