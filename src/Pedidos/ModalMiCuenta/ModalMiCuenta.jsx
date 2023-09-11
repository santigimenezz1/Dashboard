import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../ModalMiCuenta/modalMiCuenta.css'
import ModalDetalles from '../ModalDetalles/ModalDetalles';
import ModalEliminar from '../ModalEliminar/ModalEliminar';

export default function ModalMiCuenta( {pedido, eliminarOrden} ) {
  console.log(pedido.user)
  return (
    <div className='container__tarjeta__pedidos'>
    <div className='container__datosCliente'>
    <h2>Datos del cliente</h2>
    <h1>Nombre: <span style={{color:"purple"}}>{pedido.buyer.user_name}</span> </h1>
    <h1>Apellido: <span style={{color:"purple"}}>{pedido.buyer.user_apellido}</span></h1>
    <h1>Telefono: <span style={{color:"purple"}}>{pedido.buyer.user_telefono}</span></h1>
    <h1>Email: <span style={{color:"purple"}}>{pedido.buyer.user_email}</span></h1>
    <h1>Orden de pedido: <span style={{color:"purple"}}>FLhAjpCNzjPonG7fP13v</span></h1>
    <h1>Fecha: <span style={{color:"purple"}}>20/1/2023</span></h1>
    <h1>Monto:<span style={{color:"purple"}}> ${pedido.total}</span></h1>

    </div>
    <div className='container__botones__pedidos'>
      <ModalEliminar pedido={pedido} eliminarOrden={eliminarOrden} />
      <ModalDetalles pedido={pedido} />
    </div>

    
    </div>
  );
}