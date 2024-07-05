// import { Button } from "../Button/Button";
import { Box, Button, Flex, Grid } from "@radix-ui/themes";
import { Div } from "../styled/styledComponent";
import { styled } from "@stitches/react";

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

  //styled
  const StyledGrid = styled(Grid, {
    border: "2px solid black",
    borderRadius: "15px",
  });

  const StyledBox = styled(Box, {
    border: "2px solid black",
    borderRadius: "15px",
    color: isCountMore ? "red" : "black",
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    margin:'20px'
  });


  return (
    <>
      <Flex display={"flex"} direction={"column"} align={"center"}>
        <StyledBox minHeight="20vh" width="40vh">
          <h1>{isMessage}</h1>
        </StyledBox>
        <StyledGrid
          columns={"2"}
          gap={"2"}
          width={"40vh"}
          height={"10vh"}
          align={"center"}
        >
          <Button onClick={handleIncClick} disabled={isCountMore}>
            Click
          </Button>
          <Button onClick={handleResetClick} disabled={isCounterReset}>
            Reset
          </Button>
        </StyledGrid>
      </Flex>
    </>
  );
};
