"use client";

import { StoreContext } from "@/app/context";
import { Book } from "@/app/lib/fack-data";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function AddToCart({ book }: { book: Book }) {
  const { cartData, setCartData } = useContext(StoreContext)!;

  const handleCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    action: "increment" | "decrement",
    reason: string
  ) => {
    e.preventDefault();

    const existingItem = cartData.find(
      (item) => item.id === id && item.type === reason
    );

    if (existingItem) {
      if (action === "increment") {
        setCartData((prev) =>
          prev.map((item) =>
            item.id === id && item.type === reason
              ? item.stock > item.quantity! ? { ...item, quantity: (item.quantity ?? 0) + 1 } : {...item, quantity: (item.quantity ?? 0) + 0 }
              : item
          )
        );
      }

      if (action === "decrement") {
        if ((existingItem.quantity ?? 0) > 1) {
          setCartData((prev) =>
            prev.map((item) =>
              item.id === id && item.type === reason
                ? { ...item, quantity: item.quantity! - 1 }
                : item
            )
          );
        } else {
          setCartData((prev) =>
            prev.filter((item) => !(item.id === id && item.type === reason))
          );

          toast.info(`Removed ${book.title} from the cart`, {
            autoClose: 1500,
            position: "top-right",
          });
        }
      }
    } else {
      setCartData((prev) => [...prev, { ...book, type: reason, quantity: 1 }]);

      toast.success(`Added ${book.title} to the cart`, {
        autoClose: 1500,
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-full flex justify-between px-2 -mt-1">

      {/* buy  */}
      {cartData.find((item) => item.id === book.id && item.type === "buy") ? (
        <div
          className={`w-22 h-8 flex justify-between font-semibold px-2 py-1 text-white rounded-sm transition-all duration-300`}
        >
          <button
            type="button"
            onClick={(e) => handleCart(e, book.id, "increment", "buy")}
            className={`bg-purple-500 h-full w-6 rounded-xl text-xl font-bold flex justify-center items-center transition-all duration-300 hover:bg-purple-700 cursor-pointer`}
          >
            +
          </button>
          <span className="text-black">
            {
              cartData.filter(
                (item) => item.id === book.id && item.type === "buy"
              )[0]?.quantity
            }
          </span>
          <button
            type="button"
            onClick={(e) => handleCart(e, book.id, "decrement", "buy")}
            className={`bg-purple-500 h-full w-6 rounded-xl text-xl font-bold flex justify-center items-center transition-all duration-300 hover:bg-purple-700 cursor-pointer`}
          >
            -
          </button>
        </div>
      ) : (
        <button
          type="button"
          disabled={book.stock <= 0}
          onClick={(e) => handleCart(e, book.id, "increment", "buy")}
          className={`w-22 h-8 text-sm font-semibold px-2 py-1 text-white bg-purple-500 rounded-sm transition-all duration-300 ${
            book.stock <= 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-purple-700  cursor-pointer"
          }`}
        >
          <ShoppingCartIcon className="w-5 inline" /> to Buy
        </button>
      )}


      {/* rent  */}
         
      {
        cartData.find(item => item.id === book.id && item.type === "rent")? (<div
          className={`w-22 h-8 flex justify-between font-semibold px-2 py-1 text-white rounded-sm transition-all duration-300`}
        >
          <button
            type="button"
            onClick={(e) => handleCart(e, book.id, "increment", "rent")}
            className={`bg-purple-500 h-full w-6 rounded-xl text-xl font-bold flex justify-center items-center transition-all duration-300 hover:bg-purple-700 cursor-pointer`}
          >
            +
          </button>
          <span className="text-black">
            {
              cartData.filter(
                (item) => item.id === book.id && item.type === "rent"
              )[0]?.quantity
            }
          </span>
          <button
            type="button"
            onClick={(e) => handleCart(e, book.id, "decrement", "rent")}
            className={`bg-purple-500 h-full w-6 rounded-xl text-xl font-bold flex justify-center items-center transition-all duration-300 hover:bg-purple-700 cursor-pointer`}
          >
            -
          </button>
        </div>):(<button
        type="button"
        disabled={book.stock <= 0}
        onClick={(e) => handleCart(e, book.id, "increment", "rent")}
        className={`w-22 h-8 text-sm font-semibold px-2 py-1 text-white bg-purple-500 rounded-sm transition-all duration-300 ${
          book.stock <= 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-purple-700  cursor-pointer"
        }`}
      >
        <ShoppingCartIcon className="w-5 inline" /> to Rent
      </button>)
      }

      
    </div>
  );
}
