import { useContext } from "react";
import categoriasContext from "../context/CategoriasProvider";

const useCategorias = () => {
    return useContext(categoriasContext);
}

export default useCategorias;