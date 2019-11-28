
import styled from '@emotion/styled'


export const DateAnchor = styled.button`
    color: #808088;
    float:left;
    border:solid;
    margin:2px;
    margin-right:10px;
    padding-right:2px;
    padding-left:2px;
    text-align:center;
    border-radius:5px;
    text-decoration: none;
    background-color: white;
    color: ${(props) => (props.isCurrent ? "#f83b71" : "")};
`