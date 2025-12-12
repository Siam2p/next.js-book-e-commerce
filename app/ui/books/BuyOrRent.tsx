'use client'

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

const BuyOrRent = ({book}: {book: Book}) => {

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>, reason: string) => {
    e.preventDefault();
    const newData = {...book, action: reason};
  }

  return(
    <div className="flex items-center">
      <div className="m-2">
        <button
        type="button"
        disabled={book.stock <= 0}
        onClick={(e)=>handleCart(e, 'buy')}
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
        onClick={(e)=>handleCart(e, 'rent')}
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