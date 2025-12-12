'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';


interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  genre: string;
  pages: number;
  isRented: boolean;
  stock: number;
  rentPrice: number;
  sellPrice: number;
  sold: number;
  ISBN: string;
  renterIds?: string[];
}


export default function AddToCart({book}: {book: Book}) {

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>, reason: string) => {
    e.preventDefault();
    const newData = {...book, action: reason};
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
