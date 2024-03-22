import React, { useState } from "react";

const ContextGlobal =React.createContext();


const Prov_Global=({children})=>{

    const [users,modificarUsers]=useState({
        showUsers:[
                {   
                    nombre: "Arroz",
                    correo: "arroz@gmail.com",
                    id:0,
                },
                {
                    nombre: "Arise",
                    correo: "insano@gmail.com",
                    id:1,
                },
            ]
        }
        
    );
    const CloneUsers={...users};
    const agregarUser=(nombre,correo)=>{
            CloneUsers.showUsers.push(
            {
                nombre:nombre,
                correo:correo,
                id:CloneUsers.showUsers.length,
            }
        )
        modificarUsers(CloneUsers);
    }
    const eliminarUser=(user_a_eliminar)=>{
        const rpta=CloneUsers.showUsers.filter((user)=>{
            return user.id !== user_a_eliminar.id;
        })
        modificarUsers(
            {
                showUsers: rpta,
            }
        )
        //modificarUsers(rpta); 
    }
    const modificarUser=(nombre,correo,id)=>{
        const rpta=CloneUsers.showUsers.map((user)=>{
                if(user.id===id){
                    return (
                        {
                            nombre:nombre,
                            correo:correo,
                            id:id,
                        }
                    );
                }
                else{
                    return user;
                }
        });

        //console.log(rpta);
        modificarUsers(
            {
                showUsers:rpta,
            }
        )
    }
        

    
    
    return(
        <ContextGlobal.Provider value={{users,agregarUser,eliminarUser,modificarUser}}>
            {children}
        </ContextGlobal.Provider>
    )
}


export {ContextGlobal,Prov_Global}