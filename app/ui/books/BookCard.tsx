import { ArchiveBoxIcon, ArchiveBoxXMarkIcon, CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";


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

export default function BookCard({
  book,
}: {
  book: Book;
}) {
  return (
    <Link href={`/store/${book.id}`} className="">
      <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm">
        <h1 className="text-sm font-semibold pb-1">{book.title}</h1>
        <div className="mr-2 rounded-md">
          <Image
            className="mr-2 rounded-md"
            src={book.cover}
            alt={book.title}
            width={150}
            height={100}
            style={{ height: "200px", width: "auto" }}
            priority={true}
            />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs italic pt-1">by {book.author}</p>
          <div className="flex flex-col items-center justify-center space-y-1 p-2">
            <div className="w-full flex justify-between">
              {book.stock > 0 ? <span className="flex text-sm"><ArchiveBoxIcon className="w-5 h-5"/>{book.stock} in stock</span> : <span className="flex text-sm text-red-500"><ArchiveBoxXMarkIcon className="w-5 h-5"/>Out of stock</span>}
              <span className="flex text-sm"><CurrencyBangladeshiIcon className="w-5 h-5"/>{book.sellPrice} to buy</span>
            </div>
            <div className="text-center border-b border-gray-400 w-full pb-5">
              <p className="text-sm">
                {`Rent for ${book.rentPrice} BDT per month`}
              </p>
              <p className="text-xs">{book.isRented ? `Currently this book is rented by ${book?.renterIds?.length} users` : `Currently no one has rented this book`}</p>
            </div>
          </div>
          <AddToCart book={book} />
        </div>
      </div>
    </Link>
  );
}
