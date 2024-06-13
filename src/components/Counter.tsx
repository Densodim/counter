import React, {useEffect, useState} from "react";
import {StyledCounter, Div} from "./styled/styledComponent";
import {Button} from "./Button";
import {Input} from "./Input";


export const Counter = () => {
    const maxCount = 5;
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getCount = localStorage.getItem('counterKey');
        if (getCount) {
            const newCount = JSON.parse(getCount);
            setCount(newCount);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterKey', JSON.stringify(count));
    }, [count]);

    const handleIncClick = () => {
        if (count < maxCount) {
            setCount(count + 1);
        }
    }
    const handleResetClick = () => {
        localStorage.clear();
        setCount(0);

    }
    const isCountMoreFive = count >= maxCount
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
                    <Div $sizeHeight='20vh' $sizeWidth='40vh' $color={isCountMoreFive ? 'red': ''}>
                        <h1>{count}</h1>
                    </Div>
                    <Div $sizeHeight='10vh' $sizeWidth='40vh'>
                        <Button
                            onClick={handleIncClick}
                            disabled={isCountMoreFive}
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