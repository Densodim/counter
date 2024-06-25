import React, {ReactNode} from "react";
import {StyledButton} from "../styled/styledComponent";

type PropsType = {
    children: ReactNode
    onClick:()=>void
    disabled:boolean
}

export const Button = ({children, onClick, disabled}: PropsType) => {
    return (
        <>
            <StyledButton onClick={onClick} disabled={disabled}>
                {children}
            </StyledButton>
        </>


    )
}