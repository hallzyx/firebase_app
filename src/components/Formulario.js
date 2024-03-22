import React, { useContext, useState } from "react";
import styled from "styled-components";
import Boton from "./Boton";
import StyleFormulario from "./StyleFormulario";
import UserSlot from "./UserSlot";
import { ContextGlobal } from "../contexts/ContextGlobal";
import db from "../firebase/firebaseConfig";

const Formulario = () => {

    const [nombre,cambiarNombre]=useState("");
    const [correo,cambiarCorreo]=useState("");

    const VariablesGlobales=useContext(ContextGlobal);

    const UpdateCredentials=(e)=>{
        if(e.target.id==="name"){
            cambiarNombre(e.target.value);
        }
        else if(e.target.id=="email"){
            cambiarCorreo(e.target.value);
        }
    }

    const EnviarInfo=(e)=>{
        e.preventDefault();
        if(nombre!=="" && correo!==""){
            VariablesGlobales.agregarUser(nombre,correo);
        }
        
    }

    return ( 
        <StyleFormulario form_centrado bg_color="white" padding="50px" onSubmit={EnviarInfo}>
            <h1 style={{"margin":"10px 0"}}>Lista de contactos:</h1>
            
            <input  type="text"
                    placeholder="Nombre"
                    value={nombre}
                    id="name"
                    onChange={(e)=>UpdateCredentials(e)}
                    />  
            
            <input  type="email" 
                    placeholder="Correo"
                    id="email"
                    onChange={(e)=>UpdateCredentials(e)}
                    />
            
            <Boton btn_default type="submit">Agregar</Boton>
            
        </StyleFormulario>
     );
}


 
export default Formulario;