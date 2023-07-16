import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Colores() {
  const {setColor}= useContext(Contexto)

  const cambio1=()=>{
    setColor('#4285f4')
  }
  const cambio2=()=>{
    setColor("#f70c0c")
  }
  const cambio3=()=>{
    setColor("#e8e005fa")
  }
  const cambio4=()=>{
    setColor("#42f44e")
  }


  return (
    <div className='colores'>
    <div className='color' onClick={cambio1} ></div>
    <div className='color' onClick={cambio2}></div>
    <div className='color' onClick={cambio3}></div>
    <div className='color' onClick={cambio4}></div>
    </div>
  )
}

export default Colores
