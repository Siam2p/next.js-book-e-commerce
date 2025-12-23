'use client'
import { StoreContext } from "@/app/context";
import { Book } from "@/app/lib/fack-data";
import { useContext } from "react";
import { useRouter} from "next/navigation";

const BuyOrRent = ({book}: {book: Book}) => {

  const {cartData, setCartData} = useContext(StoreContext)!;
  const router = useRouter();

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>, reason: string, id:string) => {
    e.preventDefault();

    const existingItem = cartData.find(item => item.id === id && item.type === reason);
    if(existingItem){
      setCartData((prev) =>
          prev.map((item) =>
            item.id === id && item.type === reason
              ? item.stock > item.quantity! ? { ...item, quantity: (item.quantity ?? 0) + 1 } : {...item, quantity: (item.quantity ?? 0) + 0 }
              : item
          )
        );
    }else{
      setCartData(prev=>[...prev, {...book, type:reason, quantity:1}])
    }
    router.push('/store/cart')
  }

  return(
    <div className="flex items-center">
      <div className="m-2">
        <button
        type="button"
        disabled={book.stock <= 0}
        onClick={(e)=>handleCart(e, 'buy', book.id)}
        className={`bg-purple-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${book.stock <= 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-purple-700'}`}>Buy this book for {book.sellPrice} BDT</button>
        <p className="text-sm text-gray-700 text-center">{book?.sold ? 
          `${book?.sold} copies sold already!` : 
          `Be the first one to buy this book!`}
        </p>
      </div>  
      <div className="m-2">
        <button
        type="button"
        disabled={book.stock <= 0}
        onClick={(e)=>handleCart(e, 'rent', book.id)}
        className={`bg-purple-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${book.stock <= 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-purple-700'}`}>Rent this book for {book.rentPrice} BDT/pm</button>
        <p className="text-sm text-gray-700 text-center">{book.isRented ? 
          `Rented by ${book?.renterIds?.length} customer already!` : 
          `Be the first one to rent this book!`}
        </p>
        </div>
    </div>
  )
}

export default BuyOrRent;