import React, { useEffect, useState } from 'react';
import ModalMiCuenta from './ModalMiCuenta/ModalMiCuenta';
import '../Pedidos/pedidos.css';
import { db } from '../FirebaseConfig';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  onSnapshot, // Importa onSnapshot para escuchar cambios en tiempo real
} from 'firebase/firestore';
import TarjetaModal from './TarjetaModal/TarjetaModal';
import { Link } from 'react-router-dom';

const Pedidos = () => {
  const [pedido, setPedido] = useState([]);

  const fetchPedidos = async () => {
    try {
      let pedidosCollection = collection(db, 'pedidos');
      const res = await getDocs(pedidosCollection);
      let pedidosData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPedido(pedidosData);
    } catch (error) {
      // Maneja errores si es necesario
      console.error('Error al obtener pedidos:', error);
    }
  };

  useEffect(() => {
    // Llama a la función para obtener pedidos cuando el componente se monta
    fetchPedidos();

    // Crea un oyente en la colección de pedidos para actualizaciones en tiempo real
    const pedidosCollection = collection(db, 'pedidos');
    const unsubscribe = onSnapshot(pedidosCollection, (querySnapshot) => {
      const pedidosData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPedido(pedidosData);
    });

    // Devuelve una función de limpieza para detener el oyente cuando el componente se desmonta
    return () => unsubscribe();
  }, []); // Dependencia vacía para que se ejecute solo una vez

  const eliminarOrden = async (productoId) => {
    try {
      const docRef = doc(db, 'pedidos', productoId);
      await deleteDoc(docRef);

      // Luego de eliminar el pedido, llama a la función para obtener pedidos nuevamente
      fetchPedidos();
    } catch (error) {
      // Maneja errores si es necesario
      console.error('Error al eliminar pedido:', error);
    }
  };

  const agregarNuevoPedido = async (nuevoPedido) => {
    try {
      const pedidosCollection = collection(db, 'pedidos');
      await addDoc(pedidosCollection, nuevoPedido);
    } catch (error) {
      // Maneja errores si es necesario
      console.error('Error al agregar nuevo pedido:', error);
    }
  };

  return (
    <div className="container__pedidos">
      <div className="container__pedidos__titulo">
        <h1 className="titulo__pedidos">Tus pedidos</h1>
        <Link to={'/'}>
        <KeyboardBackspaceIcon fontSize='large' />
        </Link>
      </div>
      <div className="container__pedidos__tarjetas">
        {pedido.length > 0 &&
          pedido.map((pedido) => (
            <ModalMiCuenta
              key={pedido.id}
              pedido={pedido}
              eliminarOrden={eliminarOrden}
            />
          ))}
      </div>
      {/* Aquí puedes agregar un botón o un formulario para agregar un nuevo pedido */}
    </div>
  );
};

export default Pedidos;
