import {StyledInput} from "./styled/styledComponent";

type PropsType = {
    label:string
    disabled:boolean
}
export const Input = ({label, disabled}:PropsType) => {
    return (
        <>
            <div>
                {label}
                <StyledInput disabled={disabled}/>
            </div>

        </>
    )
}