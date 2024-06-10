import styled from "styled-components";

type DivType = {
    $sizeHeight?: string
    $sizeWidth?: string
    $color?:string
}
export const StyledCounter = styled.div`
    background-color: lightsteelblue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    height: 100vh;
    gap: 40px;
`

export const StyledCounterText = styled.span`
    color: white;

`

export const Div = styled.div.attrs<DivType>(props => ({
    $sizeHeight: props.$sizeHeight || '40vh',
    $sizeWidth: props.$sizeWidth || '50vh',
    $color: props.$color || 'black',
}))`
    color: ${props => props.$color};
    border: solid 2px black;
    border-radius: 5px;
    height: ${props => props.$sizeHeight};
    width: ${props => props.$sizeWidth};
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const StyledButton = styled.button`
    background: ${props=> props.disabled ? '#d9e2e3' : '#61dafb' };
    color: aliceblue;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: solid 2px cornflowerblue;
    border-radius: 3px;
    cursor: ${props => props.disabled ? 'no-drop':'pointer'};
    opacity: ${props => props.disabled ? '0.6':'1'};
    &:active{
        border: solid 3px black;
        font-size: 1.6em;
    }
`

export const StyledInput = styled.input.attrs({type: 'number'})`
    padding: 0.5em;
    margin: 0.5em;
    color: black;
    background: blanchedalmond;
    border: solid 1px black;
    border-radius: 3px;
    min-height: 5em;
`