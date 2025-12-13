import { createContext, Dispatch, SetStateAction } from "react";
import { Book } from "../lib/fack-data";

export interface StoreContextType {
  cartData: Book[];
  setCartData: Dispatch<SetStateAction<Book[]>>;
}

export const StoreContext = createContext<StoreContextType | null>(null);
