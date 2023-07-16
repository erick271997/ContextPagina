import React, { useContext, useState } from "react"
import { Contexto } from "./contexto/Contexto"
import rey_leogivildo from './reyes/rey_leogivildo.png';
import rey_recesvinto from './reyes/rey_recesvinto.png';



function Pagina3() {
    const {color}= useContext(Contexto)
    const[Imagen,setImagen,]= useState(rey_leogivildo);
    const NextIma=()=>{
      setImagen(rey_recesvinto)
      setText(Nextext)
    }

    const[Text,setText]= useState(' Rey Ervigio tiene un valor de 8500.000 peso colombiano');
    const Nextext=()=>{
      setText('Este Rey es una sorpresa 8500.000 en peso colmbiano');
    }
  
   
  return (
    <div className='hijo' style={{background:color}}>
        <h1>Pagina 3</h1>
        <img src={Imagen} className="atanagildo" alt="reyes" />
       <div>
        <button className="btn1" onClick={NextIma}>Next</button>
       </div>
     <p>{Text}</p>
        </div>
  )
}

export default Pagina3