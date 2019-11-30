
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
    color: ${(props) => (props.isDate ? "#f83b71" : "")};
`
export const RegionAnchor = styled.div`

    border:solid;
    width:110px;
    height: 20px;
    overflow: hidden;
    font-size: small;
    text-align: center;
    color: #808088;
    /*margin-left: 200px;*/
    margin-bottom: 1.5rem;

    &:hover{
        border:solid #f83b71;
        background-color:#f83b71;
        color:white
    }
    color:${(props)=>(props.isRegion ? "#f83b71" : "")}; 
`
