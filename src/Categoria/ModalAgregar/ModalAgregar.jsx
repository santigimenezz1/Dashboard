import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalAgregar/modalAgregar.css';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import AgregarImagen from '../AgregarImagen/AgregarImagen';
import AgregarImagenSecundaria from '../AgregarImagenSecundaria/AgregarImagenSecundaria';
import Swal from 'sweetalert2';

export default function ModalAgregar({ producto, obtenerDatosActualizados }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [urlImagen, setUrlImagen] = React.useState(""); // Estado para almacenar la URL de la imagen
  const [urlImagenSecundaria, setUrlImagenSecundaria] = React.useState("");

  // ...

  // Función para agregar los productos
  const agregarProducto = async (data) => {
    const productRef = collection(db, "products");
    try {
      await addDoc(productRef, data);
      console.log("Producto agregado con éxito");
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  }

    //UTILIZANDO FORMIK PARA CAPTURAR LOS INPUTS
    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
          nombre: "",
          caracteristica1: "",
          caracteristica2: "",
          stock: "",
          precio:"",
          categoria:""
        },
        onSubmit: (data) => { 
        const objeto = {
            ...data,
            imagenPrincipal: urlImagen,
            imagenSecundaria: urlImagenSecundaria
          }  
          agregarProducto(objeto)
          obtenerDatosActualizados()
          handleClose()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Agregado ! ",
            showConfirmButton: true,
            timer: 3500,
          });
        },
        validateOnChange: false      
    })
 //EN EL ESTADO OBJETO GUARDO LOS DATOS, QUE ES LO QUE LE VOY A MANDAR A LA FUNCION
 //EDITAR PRODUCTO PARA QUE PUEDA MODIFICAR LOS DATOS SEGUN EL ID DEL PRODUCTO 

 return (
  <>
    <div>
      <button className='button__agregarProducto' onClick={handleOpen}>Agregar producto</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modal' >
          <Typography style={{ textAlign: "center" }} id="modal-modal-title" variant="h6" component="h2">
            Agregar producto
          </Typography>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "30px" }}>
            <div>
              <h1 className='nombre_input_file'>Imagen principal</h1>
              <AgregarImagen setUrlImagen={setUrlImagen} urlImagen={urlImagen} /> {/* Pasa la función para actualizar la URL */}
            </div>
            <div>
              <h1 className='nombre_input_file'>Imagen Secundaria</h1>
              <AgregarImagenSecundaria setUrlImagenSecundaria={setUrlImagenSecundaria} urlImagenSecundaria={urlImagenSecundaria} /> {/* Pasa la función para actualizar la URL */}
            </div>
          </div>
          <Typography id="modal-modal-description" >
            <div className='tarjeta__modal__producto'>
            </div>
          </Typography>
          
          <form onSubmit={handleSubmit} className='tarjeta__modal__producto__form'>
          <TextField onChange={handleChange} name='nombre' className='input'  id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField onChange={handleChange} name='caracteristica1' className='input' id="outlined-basic" label="Caracteristica1" variant="outlined" />
          <TextField onChange={handleChange} name='caracteristica2' className='input' id="outlined-basic" label="Caracteristica2" variant="outlined" />
          <TextField onChange={handleChange} name='stock' className='input' id="outlined-basic" label="Stock" variant="outlined" />
          <TextField onChange={handleChange} name='precio' className='input' id="outlined-basic" label="Precio" variant="outlined" />
          <TextField onChange={handleChange} name='categoria' className='input' id="outlined-basic" label="Categoria" variant="outlined" />
          <div className='container__boton__agregar'>
          <button type='submit' className='tarjeta__modal__producto__form__button'>Agregar</button>
          </div>



          </form>
        </div>
      </Modal>
    </div>
    </>
    
  );
}