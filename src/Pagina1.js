import React, { useContext, useState } from "react"
import { Contexto } from "./contexto/Contexto"
import atanagildo from './reyes/rey_atanagildo.png';
import rey_ataulfo from  './reyes/rey_ataulfo.png';
function Pagina1() {
    const {color}= useContext(Contexto)

    const[Imagen,setImagen,]= useState(atanagildo);
    const NextIma=()=>{
      setImagen(rey_ataulfo)
      setText(Nextext)
    }

    const[Text,setText]= useState(' Rey Atanagildo tiene un valor de 7000.000 peso colombiano');
    const Nextext=()=>{
      setText('Rey Ataulfo Tiene un valor de 7500.000 en peso colmbiano');
    }
  

   
  return (
    <div className='hijo' style={{background:color}}>
      <div>
       <h1>Pagina1</h1> 
       
        <img src={Imagen} className="atanagildo" alt="reyes" />
       <div>
        <button className="btn1" onClick={NextIma}>Next</button>
       </div>
     <p>{Text}</p>
      </div>
        </div>
  )
}

export default Pagina1