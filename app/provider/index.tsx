'use client'
import { useState } from 'react'
import { StoreContext } from '../context';
import { Book } from '../lib/fack-data';


export default function StoreProvider({ children }: { children: React.ReactNode }) {

  const [cartData, setCartData] = useState<Book[]>([]);

  return (
    <StoreContext.Provider value={{ cartData, setCartData }}>
      {children}
    </StoreContext.Provider>
  )
}
