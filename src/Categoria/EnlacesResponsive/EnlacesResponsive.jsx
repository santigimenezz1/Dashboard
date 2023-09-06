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
                  <Link className='link' to={"/categoria/semillas"} onClick={handleAccordionClick}>
                    <li>semillas</li>
                  </Link>
                  <Link className='link' to={"/categoria/frutosSecos"} onClick={handleAccordionClick}>
                    <li>frutos secos</li>
                  </Link>
                  <Link className='link' to={"/categoria/frutasDesecadas"} onClick={handleAccordionClick}>
                    <li>frutas desecadas</li>
                  </Link>
                  {/* Agrega más enlaces aquí */}
                </ul>
              </div>
              <div>
                <ul>
                  <Link className='link' to={"/categoria/legumbresArroz"} onClick={handleAccordionClick}>
                    <li>legumbres y arroz</li>
                  </Link>
                  <Link className='link' to={"/categoria/salados"} onClick={handleAccordionClick}>
                    <li>salados</li>
                  </Link>
                  {/* Agrega más enlaces aquí */}
                </ul>
              </div>
              <div>
                <ul>
                  <Link className='link' to={"/categoria/aceites"} onClick={handleAccordionClick}>
                    <li>Aceites</li>
                  </Link>
                  <Link className='link' to={"/categoria/bebidas"} onClick={handleAccordionClick}>
                    <li>Bebidas</li>
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
