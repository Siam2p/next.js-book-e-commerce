import React from 'react'
import BookCard from './BookCard'
import { Book } from '@/app/lib/fack-data'


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
