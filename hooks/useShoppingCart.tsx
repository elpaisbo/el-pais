import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartProvider";

const useCart = () => {
    return useContext(ShoppingCartContext);
};

export default useCart;
