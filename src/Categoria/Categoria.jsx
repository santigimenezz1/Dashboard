import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import EnlacesCategoria from "./EnlacesCategoria/EnlacesCategoria"
import { useEffect, useState } from "react";
import { db } from "../FirebaseConfig";
import { Link, useParams } from "react-router-dom";
import TarjetaHoverCategoria from "./TarjetaCategoria/TarjetaCategoria";
import '../Categoria/categoria.css'
import ModalAgregar from "./ModalAgregar/ModalAgregar";
import ModalEditar from "./ModalEditar/ModalEditar";
import CrearImagen from "./CrearImagen/CrearImagen";
import CloudinaryUploader from "./CrearImagen/CrearImagen";
import AgregarImagen from "./AgregarImagen/AgregarImagen";
import BasicAccordion from "./EnlacesResponsive/EnlacesResponsive";
import '../Query/Query.css'

const Categoria = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  const eliminarProducto = (id) => {
    let productsCollection = collection(db, "products");
    let docRef = doc(productsCollection, id);
    
    // Eliminar el documento de Firebase
    deleteDoc(docRef)
      .then(() => {
        // Después de eliminar con éxito, obtener los datos actualizados
        obtenerDatosActualizados();
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
      });
  };

  const obtenerDatosActualizados = () => {
    let productsCollection = collection(db, "products");
    let consulta;
    if (categoria) {
      consulta = query(productsCollection, where("categoria", "==", categoria));
    } else {
      consulta = productsCollection;
    }
    getDocs(consulta)
      .then((res) => {
        let productos = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setData(productos);
      })
      .catch((error) => {
        console.error("Error al obtener datos actualizados:", error);
      });
  };

  useEffect(() => {
    obtenerDatosActualizados();
  }, [categoria]);

  return (
    <>
      <div className="categoria__titulo">
        <Link style={{textDecoration:"none"}} to={'/'}> <h1>Dashboard</h1></Link>
        </div>
        <div className="container__responsive__accordion">
        <BasicAccordion />
        </div>
      <div className="container__modal__agregar">
        <ModalAgregar obtenerDatosActualizados={obtenerDatosActualizados} />
      </div>
      <div className="categoria">
        <div className="categoria__enlaces">
          <EnlacesCategoria />
        </div>
        <div className="categoria__tarjetas">
          {data.length > 0 && (
            data.map((producto) => (
              <TarjetaHoverCategoria
                key={producto.id}
                producto={producto}
                eliminarProducto={eliminarProducto}
                obtenerDatosActualizados={obtenerDatosActualizados}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Categoria;
