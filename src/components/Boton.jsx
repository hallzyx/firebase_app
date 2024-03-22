import {styled, css} from "styled-components";

const Boton=styled.button`

    margin:${props=>props.margin || 'none'};
    padding:${props=>props.padding || 'none'};
    width:${props=>props.width || 'none'};
    
    ${props=>props.btn_default && css`
        padding: 10px 15px;

        background: #2979EF;
        color:white;
        border:none;
        border-radius:5px;
        cursor:pointer;
        &:hover{
            background-color:black;
            color:white;
            transition:0.5s;
        }
    `}

`;

export default Boton;