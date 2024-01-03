import styled from "styled-components";

const Box = styled.div`
    height: 100%;
    width: 100%;
    padding: ${props => props.theme.spacing(4)}px;
    box-sizing: border-box;

    background-color: ${props => props.theme.colors.paper};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export default Box
