import React from 'react'
import BookCard from './BookCard'

interface User {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

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

export default function BookList({books}: {books: Book[]}) {
  return (
    <>
    {
      books.map((book: Book) => {
        return(
          <BookCard key={book.id} book={book} />
        )
      })
    }
    </>
  )
}
