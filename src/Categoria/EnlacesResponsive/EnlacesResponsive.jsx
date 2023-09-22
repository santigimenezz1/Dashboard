import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import '../EnlacesResponsive/enlacesResponsive.css'
import '../../Query/Query.css'

export default function BasicAccordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='container__enlaces__responsive'>
      <Accordion expanded={isAccordionOpen} onChange={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:"purple"}}>Categorias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='enlacesCategoria__enlaces'>
              <div>
                <ul>
                <Link onClick={()=>setIsAccordionOpen(false)}  className="link" to={"/categoria/semillas"}>
                <li>semillas</li>
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/frutos-secos"}>
                frutos secos
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/frutas-desecadas"}>
                frutas desecadas
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/cereales"}>
                cereales
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/granola"}>
                granola
              </Link>
            </ul>
          </div>

          <div>
            <h1>Dulce</h1>
            <ul>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/legumbres-arroz"}>
                legumbres y arroz
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/salados"}>
                salados
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/sales"}>
                sales
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/hierbas"}>
                hierbas
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/pastas-mani"}>
                pastas de mani
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/harina-avenas"}>
                harinas y Avenas
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/reposteria"}>
                Reposteria
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/tostadas-galletas-arroz"}>
                Tostadas y Galletas de arroz
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/galletitas-sin-sal"}>
                Galletitas sin sal
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/yerbas"}>
                Yerbas
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/galletitas"}>
                Galletitas
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/barritas-golisonas-veggie"}>
              barritas-golisonas-veggie
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/alfajores-barritas-golisonas-veggie"}>
              alfajores-barritas-golisonas-veggie
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/productos-proteicos"}>
              Productos-proteicos
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/heladera"}>
              Heladera
              </Link>
            </ul>
          </div>
          <div>
            <h1>Infaltable</h1>
            <ul>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/snacks-sin-taac"}>
              Snacks-sin-taac
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/alfajores-golosinas-sin-azucar"}>
              Alfajores-golosinas-sin-azucar
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/alfajores-barritas-golosinas-sin-taac"}>
              Alfajores-barritas-golosinas-sin-taac
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/galletitas-sin-azucar"}>
              Galletitas-sin-azucar
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/galletitas-sin-taac"}>
              Galletitas-sin-taac
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/alfajores-golosinas-sin-azucar"}>
              Alfajores-golosinas-sin-azucar
              </Link>

              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/leches-vegetales"}>
                Leches vegetales
              </Link>
              <Link onClick={()=>setIsAccordionOpen(false)} className="link" to={"/categoria/miel"}>
                Miel
              </Link>
                  {/* Agrega más enlaces aquí */}
                </ul>
              </div>
              {/* Agrega más listas de enlaces si es necesario */}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
