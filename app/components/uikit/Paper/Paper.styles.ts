import styled from 'styled-components'


const Box = styled.div`
    height: 100%;
    width: 100%;
    padding: ${(props) => props.theme.spacing(4)}px;
    box-sizing: border-box;

    background-color: ${(props) => props.theme.colors.paper};
    box-shadow: ${(props) => props.theme.shadow.base};
`

export default Box
