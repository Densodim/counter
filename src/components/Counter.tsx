import React, {useEffect, useState} from "react";
import {StyledCounter, Div} from "./styled/styledComponent";
import {Button} from "./Button";
import {Input} from "./Input";


export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        let getCoun = localStorage.getItem('counterKey');
        if (getCoun) {
            let newCount = JSON.parse(getCoun);
            setCount(newCount);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('counterKey', JSON.stringify(count));
        setDisabled(count >= 5)
    }, [count]);

    const handleIncClick = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    }
    const handleResetClick = () => {
        localStorage.clear();
        setCount(0);
        setDisabled(false);
    }
    return (
        <>
            <StyledCounter>
                <Div>
                    <Div $sizeHeight='20vh' $sizeWidth='40vh'>
                        <Input label={'max counter'}/>
                        <Input label={'min counter'}/>
                    </Div>
                    <Div $sizeHeight='10vh' $sizeWidth='40vh'>
                        <Button
                            onClick={() => {
                            }}
                        >SET</Button>
                    </Div>
                </Div>
                <Div>
                    <Div $sizeHeight='20vh' $sizeWidth='40vh' $color={disabled ? 'red': ''}>
                        <h1>{count}</h1>
                    </Div>
                    <Div $sizeHeight='10vh' $sizeWidth='40vh'>
                        <Button
                            onClick={handleIncClick}
                            disabled={disabled}
                        >Click</Button>
                        <Button
                            onClick={handleResetClick}
                        >Reset</Button>
                    </Div>

                </Div>

            </StyledCounter>
        </>
    )
}