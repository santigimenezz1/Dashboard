import { Link } from 'react-router-dom'
import '../EnlacesCategoria/enlacesCategoria.css'
const EnlacesCategoria = () => {

  
 
  
  return (
   
      <div className='enlacesCategoria__enlaces'>
        <h1>Categorías de productos</h1>
        <div>
          <h1>Condimentos</h1>
            <ul>
             <Link className='link' to={"/categoria/semillas"}><li>semillas</li></Link> 
              <Link className='link' to={"/categoria/frutosSecos"} >frutos secos</Link >
              <Link className='link' to={"/categoria/frutasDesecadas"} >frutas desecadas</Link >
              <Link className='link' to={"/categoria/cereales"} >cereales</Link >
              <Link className='link' to={"/categoria/granola"} >granola</Link >

            </ul>
        </div>

        <div>
        <h1>Dulce</h1>
        <ul>
              <Link className='link' to={"/categoria/legumbresArroz"} >legumbres y arroz</Link >
              <Link className='link' to={"/categoria/salados"} >salados</Link >
              <Link className='link' to={"/categoria/sales"} >sales</Link >
              <Link className='link' to={"/categoria/hierbas"} >hierbas</Link >
              <Link className='link' to={"/categoria/pastaMani"} >pastas de mani </Link >
              <Link className='link' to={"/categoria/harinaAvena"} >harinas y Avenas</Link >
              <Link className='link' to={"/categoria/reposteria"} >Reposteria</Link >
              <Link className='link' to={"/categoria/TostadasGalletas"} >Tostadas y Galletas de arroz</Link >
              <Link className='link' to={"/categoria/Galletitas sin sal"} >Galletitas sin sal</Link >
              <Link className='link' to={"/categoria/caldito"} >Medialunas integrales</Link >
              <Link className='link' to={"/categoria/caldito"} >Pepas</Link >
              <Link className='link' to={"/categoria/caldito"} >Pochoclo</Link >
              <Link className='link' to={"/categoria/caldito"} >Postre</Link >
              <Link className='link' to={"/categoria/caldito"} >Tortitas Healthy</Link >
              <Link className='link' to={"/categoria/caldito"} >Wafles</Link >
            </ul>
        </div>
        <div>
        <h1>Infaltable</h1>
        <ul>
            <Link className='link' to={"/categoria/caldito"} >Aceite de Chia</Link >
            <Link className='link' to={"/categoria/caldito"} >Aceite de coco</Link >
            <Link className='link' to={"/categoria/caldito"} >Aceite de Oliva</Link >
            <Link className='link' to={"/categoria/caldito"} >Aderezos</Link >
            <Link className='link' to={"/categoria/caldito"} >Algas</Link >
            <Link className='link' to={"/categoria/caldito"} >Azúcar</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas Probioticas</Link >
            <Link className='link' to={"/categoria/caldito"} >Bebidas Vegetales</Link >
            <Link className='link' to={"/categoria/caldito"} >Cacao en polvo</Link >
            <Link className='link' to={"/categoria/caldito"} >Café</Link >
            <Link className='link' to={"/categoria/caldito"} >Coco</Link >
            <Link className='link' to={"/categoria/caldito"} >Conservas</Link >
            <Link className='link' to={"/categoria/caldito"} >Especias</Link >
            <Link className='link' to={"/categoria/caldito"} >Frutos Secos</Link >
          </ul>
      </div>
      <h1>Salado</h1>
      <ul>
        <Link className='link' to={"/categoria/caldito"} >Chipá</Link >
        <Link className='link' to={"/categoria/caldito"} >Chips</Link >
        <Link className='link' to={"/categoria/caldito"} >Galletitas saldas</Link >
        <Link className='link' to={"/categoria/caldito"} >Panes</Link >
        <Link className='link' to={"/categoria/caldito"} >Pizzetas</Link >
        <Link className='link' to={"/categoria/caldito"} >Tartas y empanadas</Link >
        <Link className='link' to={"/categoria/caldito"} >Tortillas</Link >
      
      </ul>
  </div>
   
   

   
  )
}

export default EnlacesCategoria