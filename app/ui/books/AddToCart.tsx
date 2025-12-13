'use client';

import { StoreContext } from '@/app/context';
import { Book } from '@/app/lib/fack-data';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { toast } from 'react-toastify';


export default function AddToCart({book}: {book: Book}) {

  const { cartData, setCartData } = useContext(StoreContext)!;
  console.log(cartData);

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>, reason: string) => {
    e.preventDefault();
    const newData = {...book, type: reason};
    setCartData([...cartData, newData])
    toast.success(`Added ${book.title} to the cart`, {
      autoClose: 1500,
      position: "top-right",
    })
  }


  return (
    <div className="w-full flex justify-between px-2 -mt-1">
      <button type="button"
      disabled={book.stock <= 0}
      onClick={(e)=>handleCart(e, 'buy')}
      className={`text-sm font-semibold px-2 py-1 text-white bg-purple-500 rounded-sm transition-all duration-300 ${book.stock <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700  cursor-pointer'}`}>
        <ShoppingCartIcon className='w-5 inline'/> to Buy
      </button>
      <button type="button"
      disabled={book.stock <= 0}
      onClick={(e)=>handleCart(e, 'rent')}
      className={`text-sm font-semibold px-2 py-1 text-white bg-purple-500 rounded-sm transition-all duration-300 ${book.stock <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700  cursor-pointer'}`}>
        <ShoppingCartIcon className='w-5 inline'/> to Rent
      </button>
    </div>
  )
}
