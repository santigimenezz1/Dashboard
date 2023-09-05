import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import '../EnlacesResponsive/enlacesResponsive.css'

export default function AcordionCategorias() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-acordion">
    <AcordionCategorias />
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: "purple" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Categorias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="lista-accordion">
            <Link
              className="linkCategorias"
              to={"/categoria/notebook"}
              onClick={handleAccordionChange}
            >
            <h1>Categorías de productos</h1>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/procesadores"}
              onClick={handleAccordionChange}
            >
            <h1>Condimentos</h1>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/mothers"}
              onClick={handleAccordionChange}
            >
            <li>semillas</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/semillas"}
              onClick={handleAccordionChange}
            >
              <li>frutos secos</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/frutosSecos"}
              onClick={handleAccordionChange}
            >
              <li>frutas desecadas</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/frutasDesecadas"}
              onClick={handleAccordionChange}
            >
              <li>cereales</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/cereales"}

              onClick={handleAccordionChange}
            >
              <li>granola</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/granola"}
              onClick={handleAccordionChange}
            >
              <li>legumbres y arroz</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/legumbresArroz"}
              onClick={handleAccordionChange}
            >
              <li>salados</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/salados"}
              onClick={handleAccordionChange}
            >
              <li>sales</li>
            </Link>
            <Link
            className="linkCategorias"
            to={"/categoria/sales"}
            onClick={handleAccordionChange}
          >
            <li>hierbas</li>
          </Link>
          <Link
          className="linkCategorias"
          to={"/categoria/hierbas"}
          onClick={handleAccordionChange}
        >
          <li>pastas de mani</li>
        </Link>
        <Link
        className="linkCategorias"
        to={"/categoria/pastaMani"}
        onClick={handleAccordionChange}
      >
        <li>harinas y Avenas</li>
      </Link>
      <Link
      className="linkCategorias"
      to={"/categoria/harinaAvena"}
      onClick={handleAccordionChange}
    >
      <li>Reposteria</li>
    </Link>
    <Link
    className="linkCategorias"
    to={"/categoria/reposteria"}
    onClick={handleAccordionChange}
  >
    <li>Tostadas y Galletas de arroz</li>
  </Link>
  <Link
  className="linkCategorias"
  to={"/categoria/TostadasGalletas"}
  onClick={handleAccordionChange}
>
  <li>Galletitas sin sal</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/GalletitasSinSal"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
<Link
className="linkCategorias"
to={"/categoria/monitores"}
onClick={handleAccordionChange}
>
<li>sales</li>
</Link>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
