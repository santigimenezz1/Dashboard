import * as React from 'react';
import '../ModalCategoria/modalCategoria.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../FirebaseConfig';
import Swal from 'sweetalert2';
import AcordionCategorias from '../EnlacesResponsive/EnlacesResponsive';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadiuis:"10px"
};

export default function ModalCategoria( {titulo, subtitulo, nombreBoton,  producto, eliminarProducto} ) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eliminar = (id) =>{
  eliminarProducto(id)
  handleClose()
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto eliminado! ",
    showConfirmButton: true,
    timer: 3500,
  });
  }
 

  return (
    <div>
      <div onClick={handleOpen}>
      <button className='button__eliminar'>Eliminar</button>  
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className='container-modal'  >
            <Typography className='modalCategoria__titulo' style={{textAlign:"center"}} id="transition-modal-title" variant="h6" component="h2">
              {titulo}
            </Typography>
            <Typography className='modalCategoria__subtitulo' style={{fontSize:"15px"}} id="transition-modal-description" sx={{ mt: 2 }}>
              {subtitulo}
            </Typography>
            <div className='modal__botones'>
            <div >
            <div onClick={()=>eliminar(producto.id)}>
            <button className='modal__botones__eliminar' >Aceptar</button>
            </div>
            </div>
            <div onClick={()=>handleClose()}>
            <button className='modal__botones__eliminar'>Cancelar</button>
            </div>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}