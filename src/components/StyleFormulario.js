import {styled,css} from "styled-components";

const StyleFormulario = styled.form`
    background-color:${props=>props.bg_color || 'none'};
    margin:${props=>props.margin || 'none'};
    padding:${props=>props.padding || 'none'};
    ${props=>props.form_centrado && css`
        width:30%;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-align:center;
        & input{
            padding: 10px;
            text-align:center;
            margin: 10px 0;
            width:70%
        }
    `}

`;


export default StyleFormulario;