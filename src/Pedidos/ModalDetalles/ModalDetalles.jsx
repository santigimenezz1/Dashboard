import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalDetalles/modalDetalles.css'
import TarjetaCart from '../TarjetaCart/TarjetaCart';



export default function ModalDetalles( {pedido} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <Button style={{color:"rgb(80, 182, 185)", backgroundColor:"white", fontFamily:"Nunito"}} className='button__verDetalles' onClick={handleOpen}>Ver detalles</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__detalle__pedido'  >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalle del pedido
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='container__tarjetas__detalles'>
          
          {
             Object.keys(pedido).length > 0 && (
              pedido.items.map((datos)=>(
                <TarjetaCart key={datos.id} datos={datos} />

              ))
             )
          }
          </div>
          </Typography>
          <h1 style={{textAlign:"center", padding:"10px", borderTop:"1px solid rgba(128, 0, 128, 0.68)",  margin:"30px 0px 30px 0px", color:"rgba(0, 0, 0, 0.813)"}}>Total del pedido: <span style={{color:"rgb(66, 159, 163)"}}>$25.000</span> </h1>
        </div>
      </Modal>
    </div>
  );
}