import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalAgregar/modalAgregar.css';
import { TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import AgregarImagen from '../AgregarImagen/AgregarImagen';
import AgregarImagenSecundaria from '../AgregarImagenSecundaria/AgregarImagenSecundaria';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

export default function ModalAgregar({ producto, obtenerDatosActualizados }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [urlImagen, setUrlImagen] = React.useState('');
  const [urlImagenSecundaria, setUrlImagenSecundaria] = React.useState('');

  const agregarProducto = async (data) => {
    const productRef = collection(db, 'products');
    try {
      await addDoc(productRef, data);
      console.log('Producto agregado con éxito');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Este campo es requerido'),
    caracteristica1: Yup.string(),
    caracteristica2: Yup.string(),
    stock: Yup.number().required('Este campo es requerido')
    .typeError('Solo se aceptan números ')
    .required('Este campo es requerido')
    .positive(),
    precio: Yup.number()
      .typeError('Solo se aceptan números ')
      .required('Este campo es requerido')
      .positive(),
    categoria: Yup.string().required('Este campo es requerido'),
  });
  

  const formik = useFormik({
    initialValues: {
      nombre: '',
      caracteristica1: '',
      caracteristica2: '',
      stock: '',
      precio: '',
      categoria: '',
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const objeto = {
        ...values,
        imagenPrincipal: urlImagen,
        imagenSecundaria: urlImagenSecundaria,
      };
      try {
        await agregarProducto(objeto);
        obtenerDatosActualizados();
        handleClose();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto Agregado !',
          showConfirmButton: true,
          timer: 3500,
        });
      } catch (error) {
        console.error('Error al agregar el producto:', error);
      }
    },
  });

  return (
    <>
      <div>
        <button className="button__agregarProducto" onClick={handleOpen}>
          Agregar producto
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="container__modalEditar">
            <Typography style={{ textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
              Agregar producto
            </Typography>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '30px' }}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h1 className="nombre_input_file">Imagen principal</h1>
                <AgregarImagen setUrlImagen={setUrlImagen} urlImagen={urlImagen} />
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h1 className="nombre_input_file">Imagen Secundaria</h1>
                <AgregarImagenSecundaria setUrlImagenSecundaria={setUrlImagenSecundaria} urlImagenSecundaria={urlImagenSecundaria} />
              </div>
            </div>
            <Typography id="modal-modal-description">
              <div className="tarjeta__modal__producto"></div>
            </Typography>
            <form onSubmit={formik.handleSubmit} className="tarjeta__modal__producto__form">
              <TextField
                name="nombre"
                className="input"
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.nombre}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
              <TextField
                name="caracteristica1"
                className="input"
                id="outlined-basic"
                label="Caracteristica1"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.caracteristica1}
                error={formik.touched.caracteristica1 && Boolean(formik.errors.caracteristica1)}
                helperText={formik.touched.caracteristica1 && formik.errors.caracteristica1}
              />
              <TextField
                name="caracteristica2"
                className="input"
                id="outlined-basic"
                label="Caracteristica2"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.caracteristica2}
                error={formik.touched.caracteristica2 && Boolean(formik.errors.caracteristica2)}
                helperText={formik.touched.caracteristica2 && formik.errors.caracteristica2}
              />
              <TextField
                name="stock"
                className="input"
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stock}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                helperText={formik.touched.stock && formik.errors.stock}
              />
              <TextField
                name="precio"
                className="input"
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.precio}
                error={formik.touched.precio && Boolean(formik.errors.precio)}
                helperText={formik.touched.precio && formik.errors.precio}
              />
              <TextField
  name="categoria"
  select
  className="input"
  id="outlined-basic"
  label="Categoria"
  variant="outlined"
  onChange={formik.handleChange}
  value={formik.values.categoria}
  error={formik.touched.categoria && Boolean(formik.errors.categoria)}
  helperText={formik.touched.categoria && formik.errors.categoria}
>
  <MenuItem style={{color:"purple"}} value="semillas">Semillas</MenuItem>
  <MenuItem style={{color:"purple"}} value="cereales">Cereales</MenuItem>
  <MenuItem style={{color:"purple"}} value="frutos-secos">frutos-secos</MenuItem>
  <MenuItem style={{color:"purple"}} value="frutas-desecadas">frutas-desecadas</MenuItem>
  <MenuItem style={{color:"purple"}} value="granola">granola</MenuItem>
  <MenuItem style={{color:"purple"}} value="legumbres-arroz">legumbres-arroz</MenuItem>
  <MenuItem style={{color:"purple"}} value="salados">salados</MenuItem>
  <MenuItem style={{color:"purple"}} value="sales">sales</MenuItem>
  <MenuItem style={{color:"purple"}} value="hierbas">hierbas</MenuItem>
  <MenuItem style={{color:"purple"}} value="pastas-mani">pastas-mani</MenuItem>
  <MenuItem style={{color:"purple"}} value="harina-avenas">harina-avenas</MenuItem>
  <MenuItem style={{color:"purple"}} value="reposteria">reposteria</MenuItem>
  <MenuItem style={{color:"purple"}} value="tostadas-galletas-arroz">tostadas-galletas-arroz</MenuItem>
  <MenuItem style={{color:"purple"}} value="galletitas-sin-sal">galletitas-sin-sal</MenuItem>
  <MenuItem style={{color:"purple"}} value="yerbas">yerbas</MenuItem>
  <MenuItem style={{color:"purple"}} value="barritas-golisonas-veggie">barritas-golisonas-veggie</MenuItem>
  <MenuItem style={{color:"purple"}} value="productos-proteicos">productos-proteicos</MenuItem>
  <MenuItem style={{color:"purple"}} value="heladera">heladera</MenuItem>
  <MenuItem style={{color:"purple"}} value="snacks-sin-taac">snacks-sin-taac</MenuItem>
  <MenuItem style={{color:"purple"}} value="alfajores-golosinas-sin-azucar">alfajores-golosinas-sin-azucar</MenuItem>
  <MenuItem style={{color:"purple"}} value="alfajores-barritas-golosinas-sin-taac">alfajores-barritas-golosinas-sin-taac</MenuItem>
  <MenuItem style={{color:"purple"}} value="galletitas-sin-azucar">galletitas-sin-azucar</MenuItem>
  <MenuItem style={{color:"purple"}} value="galletitas-sin-taac">galletitas-sin-taac</MenuItem>
  <MenuItem style={{color:"purple"}} value="alfajores-golosinas-sin-azucar">alfajores-golosinas-sin-azucar</MenuItem>
  <MenuItem style={{color:"purple"}} value="leches-vegetales">leches-vegetales</MenuItem>
  <MenuItem style={{color:"purple"}} value="miel">miel</MenuItem>
  


</TextField>
              <div className="container__boton__agregar">
                <button type="submit" className="tarjeta__modal__producto__form__button">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
