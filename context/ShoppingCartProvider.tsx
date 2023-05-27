import { Dispatch, SetStateAction, createContext, useState } from "react";

type ShoppingCartContextType = {
    cart: number;
    setCart: Dispatch<SetStateAction<number>>;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const ShoppingCartProvider = ({ children }: any) => {
    const [cart, setCart] = useState(0);

    return (
        <ShoppingCartContext.Provider value={{ cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;
