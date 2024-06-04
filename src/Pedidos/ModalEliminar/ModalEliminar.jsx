import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEliminar/modalEliminar.css'

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
};

export default function ModalEliminar( {eliminarOrden, pedido} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eliminar = (id) =>{
     handleClose()
     eliminarOrden(id)
  }

  return (
    <div>
      <Button style={{color:"rgb(80, 182, 185)", backgroundColor:"white", fontFamily:"Nunito"}} className='button__Eliminar' onClick={handleOpen}>Eliminar pedido</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign:"center", fontFamily:"Nunito", fontSize:"30px", color:"rgb(80, 182, 185)"}} id="modal-modal-title" variant="h6" component="h2">
            Aviso
          </Typography>
          <Typography style={{fontFamily:"Nunito"}} id="modal-modal-description" sx={{ mt: 2 }}>
            ¿Seguro que quieres eliminar este pedido?
          </Typography>
          <div className='container__button__acecptarCancelar'>
          <button onClick={()=>eliminar(pedido.id)}>Aceptar</button>
          <button onClick={()=>handleClose()}>Cancelar</button>
          </div>

        </Box>
      </Modal>
    </div>
  );
}