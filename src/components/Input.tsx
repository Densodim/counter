import {StyledInput} from "./styled/styledComponent";

type PropsType = {
    label:string
}
export const Input = ({label}:PropsType) => {
    return (
        <>
            <div>
                {label}
                <StyledInput/>
            </div>

        </>
    )
}