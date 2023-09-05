import Categoria from "../Categoria/Categoria";

export let routes = [
    {
      id: "Home",
      path: "/",
      Element: Categoria,
    },
    {
      id: "categoria",
      path: "/categoria/:categoria",
      Element: Categoria,
    }
  ];
  