import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEditar/modalEditar.css';
import { TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
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

  const editarProducto = async (id, data) => {
    try {
      const productRef = collection(db, "products");
      const documento = doc(productRef, id);

      // Filtrar los campos no vacíos antes de la actualización
      const camposActualizados = {};
      for (const key in data) {
        if (data[key] !== "") {
          camposActualizados[key] = data[key];
        }
      }
      if (Object.keys(camposActualizados).length > 0) {
        await updateDoc(documento, camposActualizados);
        handleClose();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto Editado ! ",
          showConfirmButton: true,
          timer: 3500,
        });
        obtenerDatosActualizados(); // Llama a la función para actualizar los datos
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No ingresaste datos a modificar ! ",
          showConfirmButton: true,
          timer: 3500,
        });
      }
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  //UTILIZANDO FORMIK PARA CAPTURAR LOS INPUTS
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      nombre: "",
      caracteristica1: "",
      caracteristica2: "",
      stock: "",
      precio: "",
      categoria: ""
    },
    onSubmit: (data) => {
      const objeto = {
        ...data,
        imagenPrincipal: urlImagen,
        imagenSecundaria: urlImagenSecundaria
      };
      editarProducto(producto.id, objeto);
      console.log(objeto);
    },
    validateOnChange: false
  });

  return (
    <>
      <div>
        <button className='button__agregarProductoEditar' onClick={handleOpen}>Editar</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='container__modalEditar' >
            <Typography style={{ textAlign: "center" }} id="modal-modal-title" variant="h6" component="h2">
              Agregar producto
            </Typography>
            <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "30px" }}>
              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h1 className='nombre_input_file'>Imagen principal</h1>
                <AgregarImagen setUrlImagen={setUrlImagen} urlImagen={urlImagen} /> {/* Pasa la función para actualizar la URL */}
              </div>
              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h1 className='nombre_input_file'>Imagen Secundaria</h1>
                <AgregarImagenSecundaria setUrlImagenSecundaria={setUrlImagenSecundaria} urlImagenSecundaria={urlImagenSecundaria} /> {/* Pasa la función para actualizar la URL */}
              </div>
            </div>
            <Typography id="modal-modal-description" >
              <div className='tarjeta__modal__producto'>
              </div>
            </Typography>

            <form onSubmit={handleSubmit} className='tarjeta__modal__producto__form'>
              <TextField onChange={handleChange} name='nombre' className='input' id="outlined-basic" label="Nombre" variant="outlined" />
              <TextField onChange={handleChange} name='caracteristica1' className='input' id="outlined-basic" label="Caracteristica1" variant="outlined" />
              <TextField onChange={handleChange} name='caracteristica2' className='input' id="outlined-basic" label="Caracteristica2" variant="outlined" />
              <TextField onChange={handleChange} name='stock' className='input' id="outlined-basic" label="Stock" variant="outlined" />
              <TextField onChange={handleChange} name='precio' className='input' id="outlined-basic" label="Precio" variant="outlined" />
             
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
