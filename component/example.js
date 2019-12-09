
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
    }
    color:${(props)=>(props.isRegion ? "#f83b71" : "")}; 
`
export const BranchAnchor = styled.div`

    width:80px;
    text-align: center;
    color: #808088;
    float: left;
    border: solid;
    font-size: small;
    margin-left: 20px;
    width:7rem;
    margin-bottom:2.3em;

    &:hover{
        border:solid #f83b71;
    }
    color:${(props)=>(props.isBranch ? "#f83b71" : "")}; 
`

export const MovieAnchor = styled.div`

    border:solid;
    text-align: center;
    color: #808088;
    font-size:small;
    margin-bottom:2rem;
    padding-left:4px;
    padding-right:4px;
    width:100px;

    &:hover{
        border:solid #f83b71;
    }
    color:${(props)=>(props.isMovie ? "#f83b71" : "")}; 
`

export const TimeAnchor= styled.button`
    height: 25px;
    width:80px;
    background-color: white;
    text-align: center;
    border-style: solid; 
    &:hover{
        border:solid #f83b71;
    }
    color:${(props)=>(props.isTime ? "white" : "")};
`
export const SeatAnchor = styled.input`
    margin:0;
    width: 20px !important;
    height: 20px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    outline: none;
    box-shadow: none;
    vertical-align: middle;
    background: url("seat1.png") no-repeat;
    margin: 3px 3px 3px 4px;
    background:${(props)=>(props.isSeat ? url('seat1_checked.png') : "")};
`