import React, { useContext, useState } from "react";
import styled from "styled-components";
import Boton from "./Boton";
import { ContextGlobal } from "../contexts/ContextGlobal";
import StyleFormulario from "./StyleFormulario";
const UserSlot = () => {

    const VariablesGlobales=useContext(ContextGlobal)
    
    
    const [editar,swtichEditar]=useState(false);

    const [nombre,cambiarNombre]=useState("");
    const [correo,cambiarCorreo]=useState("");

    const [elemento_a_editar,capturar_elemento_a_editar]=useState();

    const UpdateCredentials=(e)=>{
        if(e.target.id==="name"){
            cambiarNombre(e.target.value);
        }
        else if(e.target.id=="email"){
            cambiarCorreo(e.target.value);
        }
    }
    const RefillCredentials=(nombre,correo)=>{
        cambiarNombre(nombre);
        cambiarCorreo(correo);
    }
    const EnviarInfo=(e)=>{
        e.preventDefault();
        VariablesGlobales.modificarUser(nombre,correo,elemento_a_editar);
        swtichEditar(!editar);
    }
    return (
            

            VariablesGlobales.users.showUsers.map((user,index)=>{
                return(
                        
                        <User keys={index} 
                            style={{"display":"flex","justifyContent":"center",
                            "flexDirection":"column","alignItems":"center"}}>
                            {editar===true && elemento_a_editar===user.id ? 
                            
                            <StyleFormulario form_centrado onSubmit={(e)=>EnviarInfo(e)} >
                                {console.log("valor_editar[bool]: "+editar)}
                                {console.log("valor_user.id: "+user.id)}
                                <input  type="text"
                                        //placeholder="Nombre"
                                        value={nombre}
                                        id="name"
                                        onChange={(e)=>UpdateCredentials(e)}
                                        />  
                                
                                <input  type="email" 
                                        //placeholder="Correo"
                                        value={correo}
                                        id="email"
                                        onChange={(e)=>UpdateCredentials(e)}
                                        />
                                <Boton btn_default type="submit">Actualizar</Boton>
                            </StyleFormulario>    
                            :
                
                            <>
                                <h2>{user.nombre}</h2>
                                <p>{user.correo}</p>
                                <div className="controles" style={{"width":"100%"}}>
                                    <Boton type="button" btn_default onClick={()=>{
                                        capturar_elemento_a_editar(user.id);
                                        RefillCredentials( user.nombre, user.correo );
                                        swtichEditar(!editar);
                                        }}>Editar</Boton>

                                    <Boton type="button" btn_default onClick={()=>VariablesGlobales.eliminarUser(user)}>Eliminar</Boton>
                            </div>
                            </>
                            }

                            
                            
                        </User>
                   
                )
            })
        

        
     );
}
 
const User=styled.div`
    margin-top:30px;
    border:1px gray solid;
    border-radius:15px;
    padding:10px;
    width:50%;
    & .controles{
        display:flex;
        justify-content:center;
    }
    & button{
        margin: 0px 6px;
        width:50%;
    }
`;

export default UserSlot;