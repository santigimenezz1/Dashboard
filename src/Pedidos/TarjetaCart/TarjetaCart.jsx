import React from 'react'
import '../TarjetaCart/tarjetaCart.css'

const TarjetaCart = ( {datos} ) => {
  return (
    <div className='container__tarjetaCart'>
      <img className='imagen__tarjetaCart' src={datos.imagenPrincipal}></img>
      <div className='container__text__cart'>
      <h1>{datos.nombre}</h1>
      <h1>$ {datos.precio}</h1>
      </div>
    </div>
  )
}

export default TarjetaCart