'use client'

import { StoreContext } from "@/app/context";
import { Book } from "@/app/lib/fack-data";
import { CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext } from "react";

const deliveryBase: number [] = [
  0, 50, 60, 69, 78, 87, 96, 105, 114, 123, 122, 131, 140, 149, 158, 167, 176, 185, 194, 200
];

export default function OrderDetails() {

  const {cartData} =  useContext(StoreContext)!;

  
  const booksToBuy: Book[] = cartData.filter((book: Book) => book.type === 'buy');
  const priceToBuy: number = booksToBuy.reduce((total: number, book: Book) => total + book.sellPrice, 0);

  const booksToRent: Book[] = cartData.filter((book: Book) => book.type === 'rent');
  const priceToRent: number = booksToRent.reduce((total: number, book: Book) => total + book.rentPrice, 0);

  const deliveryCharge: number = deliveryBase[(priceToBuy < 1000 ? booksToBuy.length : 0) + (priceToRent < 300 ? booksToRent.length : 0)];

  return (
    <div className='w-full bg-white rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className="text-2xl pb-4">Order Details</h2>
      { booksToBuy.length > 0 || booksToRent.length > 0 ? 
      (<ul>
        {booksToBuy.length > 0 && <li>Buying {booksToBuy.length} books for <CurrencyBangladeshiIcon className="w-5 h-5 inline"/> {priceToBuy} BDT</li>}
        {booksToRent.length > 0 && <li>Renting {booksToRent.length} books for <CurrencyBangladeshiIcon className="w-5 h-5 inline"/> {priceToRent} BDT</li>}
        <li>Delivery Charge: <CurrencyBangladeshiIcon className="w-5 h-5 inline"/> {deliveryCharge} BDT</li>
        <li className="font-bold mt-2">Total: <CurrencyBangladeshiIcon className="w-5 h-5 inline"/> {priceToBuy + priceToRent + deliveryCharge} BDT</li>
      </ul>) : (
        <div className="">
        <p>Your cart is empty. Please add books to your cart.</p>
        <Link href="/store" className="text-purple-500 underline">Go to Store</Link>
        </div>
      )
    }
    </div>
  )
}
