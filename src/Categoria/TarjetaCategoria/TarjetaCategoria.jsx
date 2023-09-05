import { useState } from "react";
import "../TarjetaCategoria/tarjetaCategoria.css";
import ModalCategoria from "../ModalCategoria/ModalCategoria";
import ModalEditar from "../ModalEditar/ModalEditar";

import '../ModalEditar/modalEditar.css'
const TarjetaHoverCategoria = ( {producto, eliminarProducto, obtenerDatosActualizados} ) => {
    const [imagen, setImagen] = useState(producto.imagenPrincipal)
    const fotoPrincipal = producto.imagenPrincipal
    const fotoSecundaria = producto.imagenSecundaria

  return (
    <div className="container__tarjeta">
    <div onMouseOver={()=>setImagen(fotoSecundaria)} className="container__tarjeta__imagen">
    <img onMouseOut={()=>setImagen(fotoPrincipal)}  src={imagen}></img>
    </div>
    <div className="container__tarjeta__texto">
    <h1>Nombre: {producto.nombre}</h1>
    <h1>Precio: {producto.precio}</h1>
    <h1>Stock:{producto.stock} </h1>
  
 

    </div>
    <div className="container__tarjeta__botones">
    <ModalEditar producto={producto} obtenerDatosActualizados={obtenerDatosActualizados}  />
    <div className="boton">
    <ModalCategoria eliminarProducto={eliminarProducto}  titulo={"Eliminar producto"} subtitulo={"¿Seguro quieres eliminar este producto?"} producto={producto}  />
    </div>

    </div>
    </div>
  );
};

export default TarjetaHoverCategoria;
